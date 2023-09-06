import { Controller, Get } from '@nestjs/common';
import { OrderProductService } from './order-product.service';
import { OrderProduct } from './entities/order-product.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('order-product')
@ApiBearerAuth()
@ApiTags('OrderProduct')
export class OrderProductController extends BaseController<OrderProduct> {
  constructor(private readonly orderProductService: OrderProductService) {
    super(orderProductService);
  }
}
