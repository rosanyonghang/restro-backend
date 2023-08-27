import { CoreEntity } from '../../base/entities/base.entity';
import { Product } from '../../product/entities/product.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { Organization } from '../../organization/entities/organization.entity';

@Entity()
export class Campaign extends CoreEntity {
  @Column({
    nullable: true,
  })
  startDate: Date;

  @Column({
    nullable: true,
  })
  endDate: Date;

  @Column({
    nullable: true,
  })
  cover: string;

  @Column({
    nullable: true,
  })
  label: string;

  @Column({})
  description?: string;

  @Column({
    comment: '1:active, 2: pending',
    default: 1,
  })
  status?: number;

  @Column({
    default: 1,
  })
  priority?: number;

  // @hasMany(() => Product, {name: 'products'})
  @ManyToMany(() => Product)
  @JoinTable()
  products?: Product[];

  @ManyToMany(() => Organization)
  @JoinTable()
  organizations?: Organization[];

  // @belongsTo(() => User, {keyTo: 'createdBy', name: 'createdBy'})
  // createdBy: string;

  @Column({
    default: false,
  })
  notified?: boolean;
}
