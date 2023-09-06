import { Controller, Get } from '@nestjs/common';
import { CouponUsageService } from './coupon-usage.service';
import { CouponUsage } from './entities/coupon-usage.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('coupon-usage')
@ApiBearerAuth()
@ApiTags('Coupon Usage')
export class CouponUsageController extends BaseController<CouponUsage> {
  constructor(private readonly couponUsageService: CouponUsageService) {
    super(couponUsageService);
  }
}
