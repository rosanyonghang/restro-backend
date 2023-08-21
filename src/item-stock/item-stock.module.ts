import { Module } from '@nestjs/common';
import { ItemStockService } from './item-stock.service';
import { ItemStockController } from './item-stock.controller';

@Module({
  controllers: [ItemStockController],
  providers: [ItemStockService],
})
export class ItemStockModule {}
