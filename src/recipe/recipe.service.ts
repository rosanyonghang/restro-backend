import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { Recipe } from './entities/recipe.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RecipeService extends BaseService<Recipe> {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<Recipe>,
  ) {
    super(recipeRepository);
  }
}
