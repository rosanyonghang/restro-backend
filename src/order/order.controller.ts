import { Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './entities/order.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('order')
@ApiBearerAuth()
@ApiTags('Order')
export class OrderController extends BaseController<Order> {
  constructor(private readonly orderService: OrderService) {
    super(orderService);
  }
}
