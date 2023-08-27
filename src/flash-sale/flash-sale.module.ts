import { Module } from '@nestjs/common';
import { FlashSaleService } from './flash-sale.service';
import { FlashSaleController } from './flash-sale.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlashSale } from './entities/flash-sale.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FlashSale])],
  controllers: [FlashSaleController],
  providers: [FlashSaleService],
})
export class FlashSaleModule {}
