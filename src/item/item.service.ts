import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { Item } from './entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ItemService extends BaseService<Item> {
  constructor(
    @InjectRepository(Item) private readonly itemRepository: Repository<Item>,
  ) {
    super(itemRepository);
  }
}
