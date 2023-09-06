import { Controller, Get } from '@nestjs/common';
import { DiscountService } from './discount.service';
import { Discount } from './entities/discount.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('discount')
@ApiBearerAuth()
@ApiTags('Discount')
export class DiscountController extends BaseController<Discount> {
  constructor(private readonly discountService: DiscountService) {
    super(discountService);
  }
}
