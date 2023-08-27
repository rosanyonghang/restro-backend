import { Entity, Column, OneToOne } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';

@Entity()
export class Category extends CoreEntity {
  @Column()
  name: string;

  @OneToOne(() => Category, (category) => category.parent)
  parent: string;
}
