// src/item/item.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { FinanceRecord } from '../../financial-record/entities/financial-record.entity';
import { CoreEntity } from '../../base/entities/base.entity';
import { ItemBatch } from '../../item-batch/entities/item-batch.entity';
import { Location } from '../../location/entities/location.entity';
import { Warehouse } from '../../warehouse/entities/warehouse.entity';
import { StockTransfer } from '../../stock-transfer/entities/stock-transfer.entity';

@Entity()
export class Item extends CoreEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  initialStock: number;

  @Column()
  sku: number;

  @Column()
  qte: number;

  @Column()
  itemImage: string;

  @Column()
  metrics: string;

  @Column({
    default: false,
  })
  isFragile: boolean;

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

  @OneToMany(() => ItemBatch, (batch) => batch.item)
  batches: ItemBatch[];

  @ManyToMany(() => Location)
  @JoinTable()
  locations: Location[];

  @ManyToMany(() => Warehouse)
  @JoinTable()
  warehouses: Warehouse[];

  @OneToMany(() => StockTransfer, (transfer) => transfer.item)
  transfers: StockTransfer[];
}
