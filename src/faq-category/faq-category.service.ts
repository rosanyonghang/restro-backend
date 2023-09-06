import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { FaqCategory } from './entities/faq-category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FaqCategoryService extends BaseService<FaqCategory> {
  constructor(
    @InjectRepository(FaqCategory)
    private readonly faqCategoryRepository: Repository<FaqCategory>,
  ) {
    super(faqCategoryRepository);
  }
}
