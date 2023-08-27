import { Injectable } from '@nestjs/common';
import { CreateRecipeItemDto } from './dto/create-recipe-item.dto';
import { UpdateRecipeItemDto } from './dto/update-recipe-item.dto';

@Injectable()
export class RecipeItemService {
  create(createRecipeItemDto: CreateRecipeItemDto) {
    return 'This action adds a new recipeItem';
  }

  findAll() {
    return `This action returns all recipeItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recipeItem`;
  }

  update(id: number, updateRecipeItemDto: UpdateRecipeItemDto) {
    return `This action updates a #${id} recipeItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipeItem`;
  }
}
