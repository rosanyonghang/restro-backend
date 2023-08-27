import { Column, Entity } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';

@Entity()
export class Customer extends CoreEntity {
  @Column()
  name: string;

  @Column({
    unique: true,
  })
  phone: string;

  @Column({
    unique: true,
    nullable: true,
  })
  email?: string;

  @Column({})
  address: string;
}
