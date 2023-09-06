import { Controller, Get } from '@nestjs/common';
import { FaqCategoryService } from './faq-category.service';
import { FaqCategory } from './entities/faq-category.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('faq-category')
@ApiBearerAuth()
@ApiTags('FaqCategory')
export class FaqCategoryController extends BaseController<FaqCategory> {
  constructor(private readonly faqCategoryService: FaqCategoryService) {
    super(faqCategoryService);
  }
}
