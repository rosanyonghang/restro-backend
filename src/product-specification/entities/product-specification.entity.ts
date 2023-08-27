import { Column, Entity } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';

@Entity()
export class ProductSpecification extends CoreEntity {
  @Column()
  title: string;

  @Column()
  value: string;
}
