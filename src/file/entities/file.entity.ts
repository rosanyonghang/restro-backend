import { CoreEntity } from '../../base/entities/base.entity';
import { Column } from 'typeorm';

export class File extends CoreEntity {
  @Column()
  title: string;

  @Column()
  filename: string;

  @Column()
  url: string;
}
