// src/finance/finance.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Item } from '../../item/entities/item.entity';
import { User } from '../../user/entities/user.entity';
import { CoreEntity } from '../../base/entities/base.entity';
import { Product } from '../../product/entities/product.entity';
import { Account } from '../../account/entities/account.entity';
import { Employee } from '../../employee/entities/employee.entity';

@Entity()
export class FinancialRecord extends CoreEntity {
  @Column()
  description: string;

  @Column()
  amount: number;

  @Column({ type: 'enum', enum: ['purchase', 'sale', 'salary'] })
  type: 'purchase' | 'sale' | 'salary';

  @ManyToOne(() => Account, (account) => account.transactions)
  account: Account;

  @ManyToOne(() => Employee, (employee) => employee.transactions)
  employee: Employee;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user?: User;

  @ManyToOne(() => Item)
  @JoinColumn({ name: 'item_id' })
  item?: Item;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id' })
  product?: Item;
}
