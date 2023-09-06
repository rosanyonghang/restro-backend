import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FaqCategory } from '../../faq-category/entities/faq-category.entity';
import { CoreEntity } from '../../base/entities/base.entity';

@Entity()
export class Faq extends CoreEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => FaqCategory, (category) => category.faqs)
  category: string;
}
