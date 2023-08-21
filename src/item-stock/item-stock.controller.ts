import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ItemStockService } from './item-stock.service';
import { CreateItemStockDto } from './dto/create-item-stock.dto';
import { UpdateItemStockDto } from './dto/update-item-stock.dto';

@Controller('item-stock')
export class ItemStockController {
  constructor(private readonly itemStockService: ItemStockService) {}

  @Post()
  create(@Body() createItemStockDto: CreateItemStockDto) {
    return this.itemStockService.create(createItemStockDto);
  }

  @Get()
  findAll() {
    return this.itemStockService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemStockService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateItemStockDto: UpdateItemStockDto,
  ) {
    return this.itemStockService.update(+id, updateItemStockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemStockService.remove(+id);
  }
}
