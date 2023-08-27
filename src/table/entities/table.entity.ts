import { CoreEntity } from '../../base/entities/base.entity';
import { Column, ManyToOne } from 'typeorm';
import { FloorEntity } from '../../floor/entities/floor.entity';

export class Table extends CoreEntity {
  @Column()
  title: string;

  @Column()
  description: string;


  @Column({nullable: true})
  image?: string;

  @ManyToOne(() => FloorEntity, (floor) => floor.tables)
  floor: FloorEntity;
}
