import { Test, TestingModule } from '@nestjs/testing';
import { DefaultSettingService } from './default-setting.service';

describe('DefaultSettingService', () => {
  let service: DefaultSettingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DefaultSettingService],
    }).compile();

    service = module.get<DefaultSettingService>(DefaultSettingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
