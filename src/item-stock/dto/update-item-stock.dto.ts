import { PartialType } from '@nestjs/swagger';
import { CreateItemStockDto } from './create-item-stock.dto';

export class UpdateItemStockDto extends PartialType(CreateItemStockDto) {}
