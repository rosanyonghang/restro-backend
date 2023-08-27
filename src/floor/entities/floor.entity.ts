import { Column, Entity, OneToMany } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';
import { FloorTable } from '../../table/entities/table.entity';

@Entity()
export class Floor extends CoreEntity {
  @Column()
  title: string;

  @Column({ nullable: true })
  image?: string;

  @Column()
  description: string;

  @OneToMany(() => FloorTable, (table) => table.floor)
  tables: FloorTable[];
}
