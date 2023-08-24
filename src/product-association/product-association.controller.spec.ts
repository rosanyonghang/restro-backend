import { Test, TestingModule } from '@nestjs/testing';
import { ProductAssociationController } from './product-association.controller';
import { ProductAssociationService } from './product-association.service';

describe('ProductAssociationController', () => {
  let controller: ProductAssociationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductAssociationController],
      providers: [ProductAssociationService],
    }).compile();

    controller = module.get<ProductAssociationController>(ProductAssociationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
