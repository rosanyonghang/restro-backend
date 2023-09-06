import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { FinancialRecord } from './entities/financial-record.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FinancialRecordService extends BaseService<FinancialRecord> {
  constructor(
    @InjectRepository(FinancialRecord)
    private readonly categoryRepository: Repository<FinancialRecord>,
  ) {
    super(categoryRepository);
  }
}
