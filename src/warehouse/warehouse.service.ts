import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { Warehouse } from './entities/warehouse.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WarehouseService extends BaseService<Warehouse> {
  constructor(
    @InjectRepository(Warehouse)
    private readonly warehouseRepository: Repository<Warehouse>,
  ) {
    super(warehouseRepository);
  }
}
