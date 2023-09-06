import { Controller, Get } from '@nestjs/common';
import { RecipeItemService } from './recipe-item.service';
import { RecipeItem } from './entities/recipe-item.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('recipe-item')
@ApiBearerAuth()
@ApiTags('RecipeItem')
export class RecipeItemController extends BaseController<RecipeItem> {
  constructor(private readonly recipeItemService: RecipeItemService) {
    super(recipeItemService);
  }
}
