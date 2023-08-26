import { Test, TestingModule } from '@nestjs/testing';
import { FactoryActivityService } from './factory-activity.service';

describe('FactoryActivityService', () => {
  let service: FactoryActivityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactoryActivityService],
    }).compile();

    service = module.get<FactoryActivityService>(FactoryActivityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
