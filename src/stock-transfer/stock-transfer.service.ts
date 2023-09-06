import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { StockTransfer } from './entities/stock-transfer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StockTransferService extends BaseService<StockTransfer> {
  constructor(
    @InjectRepository(StockTransfer)
    private readonly stockTransferRepository: Repository<StockTransfer>,
  ) {
    super(stockTransferRepository);
  }
}
