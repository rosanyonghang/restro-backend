import { Controller, Get } from '@nestjs/common';
import { FlashSaleService } from './flash-sale.service';
import { FlashSale } from './entities/flash-sale.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('flash-sale')
@ApiBearerAuth()
@ApiTags('FlashSale')
export class FlashSaleController extends BaseController<FlashSale> {
  constructor(private readonly flashSaleService: FlashSaleService) {
    super(flashSaleService);
  }
}
