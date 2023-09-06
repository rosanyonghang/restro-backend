import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { FeaturedProduct } from './entities/featured-product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FeaturedProductService extends BaseService<FeaturedProduct> {
  constructor(
    @InjectRepository(FeaturedProduct)
    private readonly categoryRepository: Repository<FeaturedProduct>,
  ) {
    super(categoryRepository);
  }
}
