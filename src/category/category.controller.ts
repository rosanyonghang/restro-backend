import { Controller } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { BaseController } from '../base/base.controller';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiBasicAuth } from '@nestjs/swagger';

@Controller('category')
@ApiBasicAuth()
export class CategoryController extends BaseController<Category> {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    private readonly categoryService: CategoryService,
  ) {
    super(categoryRepository);
  }
}
