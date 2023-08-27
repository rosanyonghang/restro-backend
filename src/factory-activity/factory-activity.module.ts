import { Module } from '@nestjs/common';
import { FactoryActivityService } from './factory-activity.service';
import { FactoryActivityController } from './factory-activity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactoryActivity } from './entities/factory-activity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FactoryActivity])],
  controllers: [FactoryActivityController],
  providers: [FactoryActivityService],
})
export class FactoryActivityModule {}
