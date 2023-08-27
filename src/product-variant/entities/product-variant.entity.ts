import { Column, Entity } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';

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
}
