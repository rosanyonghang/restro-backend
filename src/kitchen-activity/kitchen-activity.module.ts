import { Module } from '@nestjs/common';
import { KitchenActivityService } from './kitchen-activity.service';
import { KitchenActivityController } from './kitchen-activity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KitchenActivity } from './entities/kitchen-activity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([KitchenActivity])],
  controllers: [KitchenActivityController],
  providers: [KitchenActivityService],
})
export class KitchenActivityModule {}
