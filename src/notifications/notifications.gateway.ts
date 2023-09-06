import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { Inject } from '@nestjs/common';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";

@WebSocketGateway({ transports: ['websocket'] })
@ApiBearerAuth()
@ApiTags('Notification')
export class NotificationsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  init(socketIoServer: Server) {
    this.server = socketIoServer;
  }

  handleConnection(client: Socket) {
    // Handle new client connection
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    // Handle client disconnection
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('notification/:123')
  handleNotification(client: Socket, payload: any) {
    // Handle received notification
    console.log('Received notification:', payload);
    console.log('inside here');
    // Perform any necessary actions based on the notification

    // Send acknowledgement to the client
    client.emit('notification_ack', { status: 'received' });
  }

  testNotification(message: string) {
    this.server.emit('notification/123', message);
  }

  sendNotificationsToUsers(message, receivers) {
    for (let i = 0; i < receivers.length; i++) {
      this.server.emit('notification/' + receivers[i], message);
    }
  }

  sendNotify(userId, message) {
    this.server.emit('notification/' + userId, {
      message: '',
      data: {
        type: 'assignment',
        id: 'assignmentId',
      },
      title: '',
    });
  }
}
