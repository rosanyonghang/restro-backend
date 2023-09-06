import { Controller, Get } from '@nestjs/common';
import { OrderLogService } from './order-log.service';
import { OrderLog } from './entities/order-log.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('order-log')
@ApiBearerAuth()
@ApiTags('OrderLog')
export class OrderLogController extends BaseController<OrderLog> {
  constructor(private readonly orderLogService: OrderLogService) {
    super(orderLogService);
  }
}
