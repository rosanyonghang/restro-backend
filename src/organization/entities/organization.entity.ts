import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Organization extends CoreEntity {
  @Column()
  name: string;

  @Column()
  phone: string;

  @Column({
    nullable: true,
  })
  apiKey?: string;

  @Column({
    nullable: true,
  })
  apiKeyExpiryDate?: Date;

  @OneToOne(() => User)
  owner: User;

  @OneToMany(() => User, (users) => users.organization)
  staff: User[];
}
