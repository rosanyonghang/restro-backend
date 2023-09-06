import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { ItemCategory } from './entities/item-category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ItemCategoryService extends BaseService<ItemCategory> {
  constructor(
    @InjectRepository(ItemCategory)
    private readonly itemCategoryRepository: Repository<ItemCategory>,
  ) {
    super(itemCategoryRepository);
  }
}
