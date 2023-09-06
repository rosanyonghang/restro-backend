import { Controller, Get } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { Coupon } from './entities/coupon.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('coupon')
@ApiBearerAuth()
@ApiTags('Coupon')
export class CouponController extends BaseController<Coupon> {
  constructor(private readonly couponService: CouponService) {
    super(couponService);
  }
}
