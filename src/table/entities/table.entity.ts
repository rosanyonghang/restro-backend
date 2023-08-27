import { CoreEntity } from '../../base/entities/base.entity';
import {Column, Entity, ManyToOne} from 'typeorm';
import { Floor } from '../../floor/entities/floor.entity';


@Entity()
export class FloorTable extends CoreEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  image?: string;

  @ManyToOne(() => Floor, (floor) => floor.tables, { nullable: true })
  floor?: Floor;
}
