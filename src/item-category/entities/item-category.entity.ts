import { Entity, Column, ManyToOne } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';

@Entity()
export class ItemCategory extends CoreEntity {
  @Column()
  name: string;

  @Column({ default: '' })
  ref: string;

  @Column({ default: null, nullable: true })
  image?: string;

  @ManyToOne(() => ItemCategory, (category) => category.parent, {
    nullable: true,
  })
  parent?: string;
}
