import { Injectable } from '@nestjs/common';
import { CreateItemBatchDto } from './dto/create-item-batch.dto';
import { UpdateItemBatchDto } from './dto/update-item-batch.dto';

@Injectable()
export class ItemBatchService {
  create(createItemBatchDto: CreateItemBatchDto) {
    return 'This action adds a new itemBatch';
  }

  findAll() {
    return `This action returns all itemBatch`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemBatch`;
  }

  update(id: number, updateItemBatchDto: UpdateItemBatchDto) {
    return `This action updates a #${id} itemBatch`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemBatch`;
  }
}
