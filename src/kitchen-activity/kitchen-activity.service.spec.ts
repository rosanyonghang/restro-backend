import { Test, TestingModule } from '@nestjs/testing';
import { KitchenActivityService } from './kitchen-activity.service';

describe('KitchenActivityService', () => {
  let service: KitchenActivityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KitchenActivityService],
    }).compile();

    service = module.get<KitchenActivityService>(KitchenActivityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
