import { Controller } from '@nestjs/common';
import { TableService } from './table.service';
import { BaseController } from '../base/base.controller';
import { FloorTable } from './entities/table.entity';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";

@Controller('table')
@ApiBearerAuth()
@ApiTags('Table')
export class TableController extends BaseController<FloorTable> {
  constructor(private readonly tableService: TableService) {
    super(tableService);
  }
}
