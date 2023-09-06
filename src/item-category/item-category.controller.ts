import {Controller, Get} from '@nestjs/common';
import { ItemCategoryService } from './item-category.service';
import { ItemCategory } from './entities/item-category.entity';
import { ApiBasicAuth } from '@nestjs/swagger';
import {BaseController} from "../base/base.controller";

@Controller('item-category')
@ApiBasicAuth()
export class ItemCategoryController extends BaseController<ItemCategory> {
  constructor(private readonly itemCategoryService: ItemCategoryService) {
    super(itemCategoryService);
  }

}
