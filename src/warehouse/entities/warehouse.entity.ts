import {
  Entity,
  OneToMany,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';
import { Location } from '../../location/entities/location.entity';
import { StockTransfer } from '../../stock-transfer/entities/stock-transfer.entity';

@Entity()
export class Warehouse extends CoreEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Location, (location) => location.warehouses)
  location: Location;

  @OneToMany(() => StockTransfer, (transfer) => transfer.senderWarehouse)
  sentTransfers: StockTransfer[];

  @OneToMany(() => StockTransfer, (transfer) => transfer.receiverWarehouse)
  receivedTransfers: StockTransfer[];

  // You can add more properties specific to each warehouse
}
