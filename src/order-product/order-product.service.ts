import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { OrderProduct } from './entities/order-product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderProductService extends BaseService<OrderProduct> {
  constructor(
    @InjectRepository(OrderProduct)
    private readonly orderProductRepository: Repository<OrderProduct>,
  ) {
    super(orderProductRepository);
  }
}
