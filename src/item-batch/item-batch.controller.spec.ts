import { Test, TestingModule } from '@nestjs/testing';
import { ItemBatchController } from './item-batch.controller';
import { ItemBatchService } from './item-batch.service';

describe('ItemBatchController', () => {
  let controller: ItemBatchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemBatchController],
      providers: [ItemBatchService],
    }).compile();

    controller = module.get<ItemBatchController>(ItemBatchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
