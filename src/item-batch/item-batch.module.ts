import { Module } from '@nestjs/common';
import { ItemBatchService } from './item-batch.service';
import { ItemBatchController } from './item-batch.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemBatch } from './entities/item-batch.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemBatch])],
  controllers: [ItemBatchController],
  providers: [ItemBatchService],
})
export class ItemBatchModule {}
