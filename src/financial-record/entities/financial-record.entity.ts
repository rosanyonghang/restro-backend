// src/finance/finance.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Item } from '../../item/entities/item.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class FinanceRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  amount: number;

  @Column({ type: 'enum', enum: ['purchase', 'sale', 'salary'] })
  type: 'purchase' | 'sale' | 'salary';

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user?: User;

  @ManyToOne(() => Item)
  @JoinColumn({ name: 'item_id' })
  item?: Item;

  // ... other properties or relationships ...
}
