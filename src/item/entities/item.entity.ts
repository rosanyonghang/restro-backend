// src/item/item.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { FinanceRecord } from '../../financial-record/entities/financial-record.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // Define the type of the item: 'food', 'ingredient', 'derived'
  @Column({ type: 'enum', enum: ['food', 'ingredient', 'derived'] })
  type: 'food' | 'ingredient' | 'derived';

  @OneToMany(() => FinanceRecord, (financeRecord) => financeRecord.item)
  financeRecords: FinanceRecord[];

  // Define relationships for ingredients and derived ingredients
  @ManyToOne(() => Item, { nullable: true })
  parentItem?: Item;

  @OneToMany(() => Item, (item) => item.parentItem)
  childItems: Item[];

  // ... other item properties ...
}
