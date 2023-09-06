import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('product')
@ApiBearerAuth()
export class ProductController extends BaseController<Product> {
  constructor(private readonly productService: ProductService) {
    super(productService);
  }
}
