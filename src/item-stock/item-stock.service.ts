import { Injectable } from '@nestjs/common';
import { CreateItemStockDto } from './dto/create-item-stock.dto';
import { UpdateItemStockDto } from './dto/update-item-stock.dto';

@Injectable()
export class ItemStockService {
  create(createItemStockDto: CreateItemStockDto) {
    return 'This action adds a new itemStock';
  }

  findAll() {
    return `This action returns all itemStock`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemStock`;
  }

  update(id: number, updateItemStockDto: UpdateItemStockDto) {
    return `This action updates a #${id} itemStock`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemStock`;
  }
}
