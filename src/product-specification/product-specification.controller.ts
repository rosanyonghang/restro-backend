import { Controller, Get } from '@nestjs/common';
import { ProductSpecificationService } from './product-specification.service';
import { ProductSpecification } from './entities/product-specification.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('product-specification')
@ApiBearerAuth()
@ApiTags('ProductSpecification')
export class ProductSpecificationController extends BaseController<ProductSpecification> {
  constructor(
    private readonly productSpecificationService: ProductSpecificationService,
  ) {
    super(productSpecificationService);
  }
}
