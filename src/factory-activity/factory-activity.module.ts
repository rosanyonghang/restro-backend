import { Module } from '@nestjs/common';
import { FactoryActivityService } from './factory-activity.service';
import { FactoryActivityController } from './factory-activity.controller';

@Module({
  controllers: [FactoryActivityController],
  providers: [FactoryActivityService],
})
export class FactoryActivityModule {}
