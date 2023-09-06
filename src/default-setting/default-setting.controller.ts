import { Controller, Get } from '@nestjs/common';
import { DefaultSettingService } from './default-setting.service';
import { DefaultSetting } from './entities/default-setting.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('default-setting')
@ApiBearerAuth()
@ApiTags('DefaultSetting')
export class DefaultSettingController extends BaseController<DefaultSetting> {
  constructor(private readonly defaultSettingService: DefaultSettingService) {
    super(defaultSettingService);
  }
}
