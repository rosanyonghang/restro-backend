import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { Coupon } from './entities/coupon.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CouponService extends BaseService<Coupon> {
  constructor(
    @InjectRepository(Coupon)
    private readonly couponRepository: Repository<Coupon>,
  ) {
    super(couponRepository);
  }
}
