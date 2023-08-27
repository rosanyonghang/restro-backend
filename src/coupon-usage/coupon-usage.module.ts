import { Module } from '@nestjs/common';
import { CouponUsageService } from './coupon-usage.service';
import { CouponUsageController } from './coupon-usage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CouponUsage } from './entities/coupon-usage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CouponUsage])],
  controllers: [CouponUsageController],
  providers: [CouponUsageService],
})
export class CouponUsageModule {}
