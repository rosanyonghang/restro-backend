import { Module } from '@nestjs/common';
import { ItemCategoryService } from './item-category.service';
import { ItemCategoryController } from './item-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemCategory } from './entities/item-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemCategory])],
  controllers: [ItemCategoryController],
  providers: [ItemCategoryService],
  exports: [ItemCategoryService],
})
export class ItemCategoryModule {}
