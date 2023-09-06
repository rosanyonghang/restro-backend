import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Warehouse } from '../../warehouse/entities/warehouse.entity';
import { Product } from '../../product/entities/product.entity';
import { Location } from '../../location/entities/location.entity';
import { Item } from '../../item/entities/item.entity';
import { CoreEntity } from '../../base/entities/base.entity';

@Entity()
export class StockTransfer extends CoreEntity {
  @ManyToOne(() => Product, (product) => product.transfers)
  product: Product;

  @ManyToOne(() => Item, (product) => product.transfers)
  item: Item;

  @ManyToOne(() => Location, (location) => location.sentTransfers)
  sender: Location;

  @ManyToOne(() => Warehouse, (warehouse) => warehouse.sentTransfers)
  senderWarehouse: Warehouse;

  @ManyToOne(() => Location, (location) => location.receivedTransfers)
  receiver: Location;

  @ManyToOne(() => Warehouse, (warehouse) => warehouse.receivedTransfers)
  receiverWarehouse: Warehouse;

  @Column()
  quantity: number;

  @CreateDateColumn()
  transferDate: Date;

  // Other transfer-related properties
}
