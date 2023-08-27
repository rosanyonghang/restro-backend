import { Controller } from '@nestjs/common';
import { Notification } from './entities/notification.entity';
import { BaseController } from '../base/base.controller';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController extends BaseController<Notification> {
  constructor(private notificationService: NotificationsService) {
    super(notificationService);
  }
}
