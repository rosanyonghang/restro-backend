import { Entity, Column } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';

@Entity()
export class Category extends CoreEntity {
  @Column()
  name: string;
}
