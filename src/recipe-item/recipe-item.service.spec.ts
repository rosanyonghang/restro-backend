import { Test, TestingModule } from '@nestjs/testing';
import { RecipeItemService } from './recipe-item.service';

describe('RecipeItemService', () => {
  let service: RecipeItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipeItemService],
    }).compile();

    service = module.get<RecipeItemService>(RecipeItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
