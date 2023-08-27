import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';
import { Product } from '../../product/entities/product.entity';
import { Item } from '../../item/entities/item.entity';
import { Location } from '../../location/entities/location.entity';
import { Warehouse } from '../../warehouse/entities/warehouse.entity';

@Entity()
export class ItemBatch extends CoreEntity {
  @Column()
  manufacturingDate: Date;

  @Column()
  expiryDate: Date;

  @Column()
  price: number;

  @Column({ comment: 'product or item' })
  type: string;

  @Column()
  quantity: number; // Add quantity column

  @ManyToOne(() => Product, (product) => product.batches)
  product?: Product;

  @ManyToOne(() => Item, (product) => product.batches)
  item: Item;

  @ManyToMany(() => Location)
  @JoinTable()
  locations: Location[];

  @ManyToMany(() => Warehouse)
  @JoinTable()
  warehouses: Warehouse[];
}
