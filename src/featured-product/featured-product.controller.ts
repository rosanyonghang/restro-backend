import { Controller, Get } from '@nestjs/common';
import { FeaturedProductService } from './featured-product.service';
import { FeaturedProduct } from './entities/featured-product.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('featured-product')
@ApiBearerAuth()
@ApiTags('FeaturedProduct')
export class FeaturedProductController extends BaseController<FeaturedProduct> {
  constructor(private readonly featuredProductService: FeaturedProductService) {
    super(featuredProductService);
  }
}
