import { Column, Entity, ManyToOne, OneToOne } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';
import { Product } from '../../product/entities/product.entity';

@Entity()
export class ProductAssociation extends CoreEntity {
  @ManyToOne(() => Product)
  product: string;

  @ManyToOne(() => Product)
  variant: string;
}
