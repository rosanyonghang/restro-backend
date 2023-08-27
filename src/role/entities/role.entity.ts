import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';
import { Authority } from '../../authority/entities/authority.entity';

@Entity()
export class Role extends CoreEntity {
  @Column()
  title: string;

  @Column()
  code: string;

  @ManyToMany(() => Authority)
  @JoinTable()
  authorities: Authority[];
}
