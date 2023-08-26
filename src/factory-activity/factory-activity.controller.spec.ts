import { Test, TestingModule } from '@nestjs/testing';
import { FactoryActivityController } from './factory-activity.controller';
import { FactoryActivityService } from './factory-activity.service';

describe('FactoryActivityController', () => {
  let controller: FactoryActivityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactoryActivityController],
      providers: [FactoryActivityService],
    }).compile();

    controller = module.get<FactoryActivityController>(FactoryActivityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
