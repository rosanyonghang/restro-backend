import { Controller, Get } from '@nestjs/common';
import { ProductVariantService } from './product-variant.service';
import { ProductVariant } from './entities/product-variant.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('product-variant')
@ApiBearerAuth()
@ApiTags('ProductVariant')
export class ProductVariantController extends BaseController<ProductVariant> {
  constructor(private readonly productVariantService: ProductVariantService) {
    super(productVariantService);
  }
}
