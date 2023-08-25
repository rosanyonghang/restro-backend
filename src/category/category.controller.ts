import { Controller } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { BaseController } from '../base/base.controller';
import { ApiBasicAuth } from '@nestjs/swagger';

@Controller('category')
@ApiBasicAuth()
export class CategoryController extends BaseController<Category> {
  constructor(private readonly categoryService: CategoryService) {
    super(categoryService);
  }
}
