import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { RecipeItem } from './entities/recipe-item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RecipeItemService extends BaseService<RecipeItem> {
  constructor(
    @InjectRepository(RecipeItem)
    private readonly recipeItemRepository: Repository<RecipeItem>,
  ) {
    super(recipeItemRepository);
  }
}
