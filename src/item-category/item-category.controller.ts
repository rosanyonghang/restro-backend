import { Controller, Get } from '@nestjs/common';
import { ItemCategoryService } from './item-category.service';
import { ItemCategory } from './entities/item-category.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('item-category')
@ApiBearerAuth()
@ApiTags('ItemCategory')
export class ItemCategoryController extends BaseController<ItemCategory> {
  constructor(private readonly itemCategoryService: ItemCategoryService) {
    super(itemCategoryService);
  }
}
