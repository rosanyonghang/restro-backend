import { Test, TestingModule } from '@nestjs/testing';
import { StockTransferController } from './stock-transfer.controller';
import { StockTransferService } from './stock-transfer.service';

describe('StockTransferController', () => {
  let controller: StockTransferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockTransferController],
      providers: [StockTransferService],
    }).compile();

    controller = module.get<StockTransferController>(StockTransferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
