import { Controller, Get } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { Recipe } from './entities/recipe.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('recipe')
@ApiBearerAuth()
@ApiTags('Recipe')
export class RecipeController extends BaseController<Recipe> {
  constructor(private readonly recipeService: RecipeService) {
    super(recipeService);
  }
}
