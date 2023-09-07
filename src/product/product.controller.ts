import {Body, Controller, Get, Post} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('product')
@ApiBearerAuth()
@ApiTags('Product')
export class ProductController extends BaseController<Product> {
  constructor(private readonly productService: ProductService) {
    super(productService);
  }

  @Post('create')
  createProduct(@Body() product: any){
      console.log(product)
  }

}
