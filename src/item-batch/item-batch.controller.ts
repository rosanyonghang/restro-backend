import { Controller, Get } from '@nestjs/common';
import { ItemBatchService } from './item-batch.service';
import { ItemBatch } from './entities/item-batch.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('item-batch')
@ApiBearerAuth()
@ApiTags('ItemBatch')
export class ItemBatchController extends BaseController<ItemBatch> {
  constructor(private readonly itemBatchService: ItemBatchService) {
    super(itemBatchService);
  }
}
