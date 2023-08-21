import { Module } from '@nestjs/common';
import { FinancialRecordService } from './financial-record.service';
import { FinancialRecordController } from './financial-record.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinanceRecord } from './entities/financial-record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FinanceRecord])],
  controllers: [FinancialRecordController],
  providers: [FinancialRecordService],
})
export class FinancialRecordModule {}
