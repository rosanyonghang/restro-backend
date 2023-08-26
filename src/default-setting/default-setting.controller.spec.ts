import { Test, TestingModule } from '@nestjs/testing';
import { DefaultSettingController } from './default-setting.controller';
import { DefaultSettingService } from './default-setting.service';

describe('DefaultSettingController', () => {
  let controller: DefaultSettingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DefaultSettingController],
      providers: [DefaultSettingService],
    }).compile();

    controller = module.get<DefaultSettingController>(DefaultSettingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
