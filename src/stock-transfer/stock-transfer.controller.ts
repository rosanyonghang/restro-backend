import { Controller, Get } from '@nestjs/common';
import { StockTransferService } from './stock-transfer.service';
import { StockTransfer } from './entities/stock-transfer.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('stock-transfer')
@ApiBearerAuth()
@ApiTags('StockTransfer')
export class StockTransferController extends BaseController<StockTransfer> {
  constructor(private readonly stockTransferService: StockTransferService) {
    super(stockTransferService);
  }
}
