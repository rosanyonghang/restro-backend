import { Module } from '@nestjs/common';
import { ItemBatchService } from './item-batch.service';
import { ItemBatchController } from './item-batch.controller';

@Module({
  controllers: [ItemBatchController],
  providers: [ItemBatchService],
})
export class ItemBatchModule {}
