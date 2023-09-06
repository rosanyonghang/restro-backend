import { Column, OneToMany, Entity, ManyToOne } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';
import { FinancialRecord } from '../../financial-record/entities/financial-record.entity';
import { Organization } from '../../organization/entities/organization.entity';

@Entity()
export class Employee extends CoreEntity {
  @Column()
  position: string;

  @Column()
  shift: string;

  @Column()
  joinDate: Date;

  @ManyToOne(() => Organization, (organization) => organization.employees)
  organization: Organization;

  @OneToMany(() => FinancialRecord, (transaction) => transaction.employee)
  transactions: FinancialRecord[];
}
