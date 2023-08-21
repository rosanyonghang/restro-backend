import { Test, TestingModule } from '@nestjs/testing';
import { ItemBatchService } from './item-batch.service';

describe('ItemBatchService', () => {
  let service: ItemBatchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemBatchService],
    }).compile();

    service = module.get<ItemBatchService>(ItemBatchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
