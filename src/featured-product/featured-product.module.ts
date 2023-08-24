import { Module } from '@nestjs/common';
import { FeaturedProductService } from './featured-product.service';
import { FeaturedProductController } from './featured-product.controller';

@Module({
  controllers: [FeaturedProductController],
  providers: [FeaturedProductService],
})
export class FeaturedProductModule {}
