import { Module } from '@nestjs/common';
import { ItemStockService } from './item-stock.service';
import { ItemStockController } from './item-stock.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemStock } from './entities/item-stock.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemStock])],
  controllers: [ItemStockController],
  providers: [ItemStockService],
})
export class ItemStockModule {}
