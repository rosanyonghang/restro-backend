import { Controller, Get } from '@nestjs/common';
import { FactoryActivityService } from './factory-activity.service';
import { FactoryActivity } from './entities/factory-activity.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('factory-activity')
@ApiBearerAuth()
@ApiTags('FactoryActivity')
export class FactoryActivityController extends BaseController<FactoryActivity> {
  constructor(private readonly factoryActivityService: FactoryActivityService) {
    super(factoryActivityService);
  }
}
