import { Controller } from '@nestjs/common';
import { Notification } from './entities/notification.entity';
import { BaseController } from '../base/base.controller';
import { NotificationsService } from './notifications.service';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";

@Controller('notifications')
@ApiBearerAuth()
@ApiTags('Notification')
export class NotificationsController extends BaseController<Notification> {
  constructor(private notificationService: NotificationsService) {
    super(notificationService);
  }
}
