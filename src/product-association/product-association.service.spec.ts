import { Test, TestingModule } from '@nestjs/testing';
import { ProductAssociationService } from './product-association.service';

describe('ProductAssociationService', () => {
  let service: ProductAssociationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductAssociationService],
    }).compile();

    service = module.get<ProductAssociationService>(ProductAssociationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
