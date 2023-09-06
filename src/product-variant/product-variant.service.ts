import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { ProductVariant } from './entities/product-variant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductVariantService extends BaseService<ProductVariant> {
  constructor(
    @InjectRepository(ProductVariant)
    private readonly productVariantRepository: Repository<ProductVariant>,
  ) {
    super(productVariantRepository);
  }
}
