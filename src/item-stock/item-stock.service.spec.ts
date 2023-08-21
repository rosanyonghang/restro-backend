import { Test, TestingModule } from '@nestjs/testing';
import { ItemStockService } from './item-stock.service';

describe('ItemStockService', () => {
  let service: ItemStockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemStockService],
    }).compile();

    service = module.get<ItemStockService>(ItemStockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
