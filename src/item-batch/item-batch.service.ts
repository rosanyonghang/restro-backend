import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { ItemBatch } from './entities/item-batch.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ItemBatchService extends BaseService<ItemBatch> {
  constructor(
    @InjectRepository(ItemBatch)
    private readonly itemBatchRepository: Repository<ItemBatch>,
  ) {
    super(itemBatchRepository);
  }
}
