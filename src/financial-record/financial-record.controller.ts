import { Controller, Get } from '@nestjs/common';
import { FinancialRecordService } from './financial-record.service';
import { FinancialRecord } from './entities/financial-record.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('financial-record')
@ApiBearerAuth()
@ApiTags('FinancialRecord')
export class FinancialRecordController extends BaseController<FinancialRecord> {
  constructor(private readonly financialRecordService: FinancialRecordService) {
    super(financialRecordService);
  }
}
