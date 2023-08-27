import { Module } from '@nestjs/common';
import { DefaultSettingService } from './default-setting.service';
import { DefaultSettingController } from './default-setting.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DefaultSetting } from './entities/default-setting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DefaultSetting])],
  controllers: [DefaultSettingController],
  providers: [DefaultSettingService],
})
export class DefaultSettingModule {}
