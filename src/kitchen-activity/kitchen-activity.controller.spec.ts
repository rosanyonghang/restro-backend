import { Test, TestingModule } from '@nestjs/testing';
import { KitchenActivityController } from './kitchen-activity.controller';
import { KitchenActivityService } from './kitchen-activity.service';

describe('KitchenActivityController', () => {
  let controller: KitchenActivityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KitchenActivityController],
      providers: [KitchenActivityService],
    }).compile();

    controller = module.get<KitchenActivityController>(
      KitchenActivityController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
