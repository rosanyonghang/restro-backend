import { Module } from '@nestjs/common';
import { FaqCategoryService } from './faq-category.service';
import { FaqCategoryController } from './faq-category.controller';

@Module({
  controllers: [FaqCategoryController],
  providers: [FaqCategoryService],
})
export class FaqCategoryModule {}
