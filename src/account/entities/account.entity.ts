import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';
import { FinancialRecord } from '../../financial-record/entities/financial-record.entity';

@Entity()
export class Account extends CoreEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => FinancialRecord, (transaction) => transaction.account)
  transactions: FinancialRecord[];
}
