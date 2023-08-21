import { PartialType } from '@nestjs/swagger';
import { CreateKitchenActivityDto } from './create-kitchen-activity.dto';

export class UpdateKitchenActivityDto extends PartialType(
  CreateKitchenActivityDto,
) {}
