import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { Discount } from './entities/discount.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DiscountService extends BaseService<Discount> {
  constructor(
    @InjectRepository(Discount)
    private readonly categoryRepository: Repository<Discount>,
  ) {
    super(categoryRepository);
  }
}
