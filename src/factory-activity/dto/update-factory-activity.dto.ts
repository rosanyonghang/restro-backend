import { PartialType } from '@nestjs/swagger';
import { CreateFactoryActivityDto } from './create-factory-activity.dto';

export class UpdateFactoryActivityDto extends PartialType(
  CreateFactoryActivityDto,
) {}
