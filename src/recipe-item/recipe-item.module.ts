import { Module } from '@nestjs/common';
import { RecipeItemService } from './recipe-item.service';
import { RecipeItemController } from './recipe-item.controller';
import {RecipeItem} from "./entities/recipe-item.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([RecipeItem])],
  controllers: [RecipeItemController],
  providers: [RecipeItemService],
})
export class RecipeItemModule {}
