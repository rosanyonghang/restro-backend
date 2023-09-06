import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { OrderLog } from './entities/order-log.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderLogService extends BaseService<OrderLog> {
  constructor(
    @InjectRepository(OrderLog)
    private readonly orderLogRepository: Repository<OrderLog>,
  ) {
    super(orderLogRepository);
  }
}
