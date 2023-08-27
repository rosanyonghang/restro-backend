import { Module } from '@nestjs/common';
import { ProductSpecificationService } from './product-specification.service';
import { ProductSpecificationController } from './product-specification.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSpecification } from './entities/product-specification.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductSpecification])],
  controllers: [ProductSpecificationController],
  providers: [ProductSpecificationService],
})
export class ProductSpecificationModule {}
