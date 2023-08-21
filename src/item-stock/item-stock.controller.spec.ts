import { Test, TestingModule } from '@nestjs/testing';
import { ItemStockController } from './item-stock.controller';
import { ItemStockService } from './item-stock.service';

describe('ItemStockController', () => {
  let controller: ItemStockController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemStockController],
      providers: [ItemStockService],
    }).compile();

    controller = module.get<ItemStockController>(ItemStockController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
