import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';
import { Warehouse } from '../../warehouse/entities/warehouse.entity';
import { StockTransfer } from '../../stock-transfer/entities/stock-transfer.entity';

@Entity()
export class Location extends CoreEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @OneToMany(() => Warehouse, (warehouse) => warehouse.location)
  warehouses: Warehouse[];

  @OneToMany(() => StockTransfer, (transfer) => transfer.senderWarehouse)
  sentTransfers: StockTransfer[];

  @OneToMany(() => StockTransfer, (transfer) => transfer.receiverWarehouse)
  receivedTransfers: StockTransfer[];
}
