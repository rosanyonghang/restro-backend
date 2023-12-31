import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';
import { User } from '../../user/entities/user.entity';
@Entity()
export class Notification extends CoreEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    comment: 'default, message, course, assignment, warning, alert',
  })
  type: string;

  @Column()
  referenceId?: string | null;

  @Column({ comment: 'course,assignment, batch, teams,' })
  referenceType?: string | null;

  @Column()
  image: string | null;

  @ManyToMany(() => User)
  @JoinTable()
  receivers: User[];
}
