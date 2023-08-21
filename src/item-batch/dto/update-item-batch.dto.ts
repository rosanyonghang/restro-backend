import { PartialType } from '@nestjs/swagger';
import { CreateItemBatchDto } from './create-item-batch.dto';

export class UpdateItemBatchDto extends PartialType(CreateItemBatchDto) {}
