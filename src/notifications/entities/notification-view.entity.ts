import { Notification } from './notification.entity';
import { CoreEntity } from '../../base/entities/base.entity';
import { Column, Entity, OneToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class NotificationView extends CoreEntity {
  @OneToOne(() => Notification)
  notification: Notification;

  @OneToOne(() => User)
  receiver: User;

  @Column({ default: 'unseen' })
  status: string;
}
