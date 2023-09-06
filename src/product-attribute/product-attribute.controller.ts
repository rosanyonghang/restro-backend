import { Controller, Get } from '@nestjs/common';
import { ProductAttributeService } from './product-attribute.service';
import { ProductAttribute } from './entities/product-attribute.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('product-attribute')
@ApiBearerAuth()
@ApiTags('ProductAttribute')
export class ProductAttributeController extends BaseController<ProductAttribute> {
  constructor(
    private readonly productAttributeService: ProductAttributeService,
  ) {
    super(productAttributeService);
  }
}
