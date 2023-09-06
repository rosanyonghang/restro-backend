import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { CouponUsage } from './entities/coupon-usage.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CouponUsageService extends BaseService<CouponUsage> {
  constructor(
    @InjectRepository(CouponUsage)
    private readonly couponUsageRepository: Repository<CouponUsage>,
  ) {
    super(couponUsageRepository);
  }
}
