import { Column, Entity, ManyToOne } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';
import { Product } from '../../product/entities/product.entity';

@Entity()
export class ProductVariant extends CoreEntity {
  @Column()
  title: string;

  @Column()
  description: number;

  @Column()
  price: number;

  @Column()
  value: string;

  @ManyToOne(() => Product)
  product: string;
}
