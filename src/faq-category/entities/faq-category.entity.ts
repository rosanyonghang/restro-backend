import {
  Column,
  Entity,
  CreateDateColumn,
  DeleteDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Faq } from '../../faq/entities/faq.entity';
import { CoreEntity } from '../../base/entities/base.entity';

@Entity()
export class FaqCategory extends CoreEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @OneToMany(() => Faq, (faq) => faq.category)
  faqs: string;
}
