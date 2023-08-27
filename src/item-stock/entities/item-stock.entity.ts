import { Column, Entity } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';

@Entity()
export class ItemStock extends CoreEntity {
  @Column()
  name: string;
}
