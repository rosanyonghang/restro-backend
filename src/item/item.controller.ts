import { Controller } from '@nestjs/common';
import { ItemService } from './item.service';
import { BaseController } from '../base/base.controller';
import { Item } from './entities/item.entity';

@Controller('item')
export class ItemController extends BaseController<Item> {
  constructor(private readonly itemService: ItemService) {
    super(itemService);
  }
}
