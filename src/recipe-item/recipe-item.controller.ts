import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RecipeItemService } from './recipe-item.service';
import { CreateRecipeItemDto } from './dto/create-recipe-item.dto';
import { UpdateRecipeItemDto } from './dto/update-recipe-item.dto';

@Controller('recipe-item')
export class RecipeItemController {
  constructor(private readonly recipeItemService: RecipeItemService) {}

  @Post()
  create(@Body() createRecipeItemDto: CreateRecipeItemDto) {
    return this.recipeItemService.create(createRecipeItemDto);
  }

  @Get()
  findAll() {
    return this.recipeItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipeItemService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRecipeItemDto: UpdateRecipeItemDto,
  ) {
    return this.recipeItemService.update(+id, updateRecipeItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipeItemService.remove(+id);
  }
}
