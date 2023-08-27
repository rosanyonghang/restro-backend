import { Column, Entity, OneToMany } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';
import { Table } from '../../table/entities/table.entity';

@Entity()
export class FloorEntity extends CoreEntity {
  @Column()
  title: string;

  @Column({nullable: true})
  image?: string;

  @Column()
  description: string;

  @OneToMany(() => Table, (table) => table.floor)
  tables: Table[];
}
