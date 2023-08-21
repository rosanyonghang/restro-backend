// src/kitchen/kitchen-activity.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Item } from '../../item/entities/item.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class KitchenActivity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  chef: User; // Chef who conducted the activity

  @ManyToOne(() => Item)
  item: Item; // Item involved in the activity

  @Column()
  quantity: number;

  @Column({ type: 'enum', enum: ['taken', 'produced'] })
  activityType: 'taken' | 'produced';

  @Column({ type: 'date' })
  activityDate: Date;

  // ... other activity properties ...
}
