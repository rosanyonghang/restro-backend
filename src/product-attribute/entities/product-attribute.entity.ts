import { Column, Entity, ManyToOne } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';
import { Product } from '../../product/entities/product.entity';

@Entity()
export class ProductAttribute extends CoreEntity {
  @ManyToOne(() => Product, (product) => product.specifications)
  product: Product;

  @Column()
  title: string;

  @Column()
  value: string;
}
