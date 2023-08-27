import { Module } from '@nestjs/common';
import { FeaturedProductService } from './featured-product.service';
import { FeaturedProductController } from './featured-product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeaturedProduct } from './entities/featured-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FeaturedProduct])],
  controllers: [FeaturedProductController],
  providers: [FeaturedProductService],
})
export class FeaturedProductModule {}
