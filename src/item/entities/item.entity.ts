// src/item/item.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { FinanceRecord } from '../../financial-record/entities/financial-record.entity';
import { CoreEntity } from '../../base/entities/base.entity';

@Entity()
export class Item extends CoreEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  initialStock: number;

  @Column()
  sku: number;

  @Column()
  itemImage: string;

  @Column()
  metrics: string;

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
