import { Module } from '@nestjs/common';
import { DefaultSettingService } from './default-setting.service';
import { DefaultSettingController } from './default-setting.controller';

@Module({
  controllers: [DefaultSettingController],
  providers: [DefaultSettingService],
})
export class DefaultSettingModule {}
