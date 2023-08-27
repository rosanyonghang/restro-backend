import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { FloorTable } from './entities/table.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TableService extends BaseService<FloorTable> {
  constructor(
    @InjectRepository(FloorTable)
    private readonly tableRepository: Repository<FloorTable>,
  ) {
    super(tableRepository);
  }
}
