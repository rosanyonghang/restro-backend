import { Column, Entity, ManyToOne } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';
import { Item } from '../../item/entities/item.entity';
import { Product } from '../../product/entities/product.entity';

@Entity()
export class FactoryActivity extends CoreEntity {
  @ManyToOne(() => Item)
  ingredient: Item;

  @Column()
  quantity_used: number;

  @Column()
  residue_quantity: number;

  @Column()
  combined_quantity: number;

  @ManyToOne(() => Product)
  product: Product;
}
