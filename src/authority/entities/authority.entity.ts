import { Column, Entity } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';

@Entity()
export class Authority extends CoreEntity {
  @Column()
  title: string;

  @Column()
  code: string;
}
