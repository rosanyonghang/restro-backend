import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { ProductSpecification } from './entities/product-specification.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductSpecificationService extends BaseService<ProductSpecification> {
  constructor(
    @InjectRepository(ProductSpecification)
    private readonly productSpecificationRepository: Repository<ProductSpecification>,
  ) {
    super(productSpecificationRepository);
  }
}
