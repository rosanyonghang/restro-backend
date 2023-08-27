import { Column, Entity } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';

@Entity()
export class FactoryActivity extends CoreEntity {
  @Column()
  name: string;
}
