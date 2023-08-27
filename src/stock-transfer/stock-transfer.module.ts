import { Module } from '@nestjs/common';
import { StockTransferService } from './stock-transfer.service';
import { StockTransferController } from './stock-transfer.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {StockTransfer} from "./entities/stock-transfer.entity";

@Module({
  imports:[TypeOrmModule.forFeature([StockTransfer])],
  controllers: [StockTransferController],
  providers: [StockTransferService],
})
export class StockTransferModule {}
