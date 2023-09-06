import { Controller, Get } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { Warehouse } from './entities/warehouse.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('warehouse')
@ApiBearerAuth()
@ApiTags('Warehouse')
export class WarehouseController extends BaseController<Warehouse> {
  constructor(private readonly warehouseService: WarehouseService) {
    super(warehouseService);
  }
}
