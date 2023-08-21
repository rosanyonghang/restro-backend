import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ItemBatchService } from './item-batch.service';
import { CreateItemBatchDto } from './dto/create-item-batch.dto';
import { UpdateItemBatchDto } from './dto/update-item-batch.dto';

@Controller('item-batch')
export class ItemBatchController {
  constructor(private readonly itemBatchService: ItemBatchService) {}

  @Post()
  create(@Body() createItemBatchDto: CreateItemBatchDto) {
    return this.itemBatchService.create(createItemBatchDto);
  }

  @Get()
  findAll() {
    return this.itemBatchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemBatchService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateItemBatchDto: UpdateItemBatchDto,
  ) {
    return this.itemBatchService.update(+id, updateItemBatchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemBatchService.remove(+id);
  }
}
