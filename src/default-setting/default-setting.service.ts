import { Injectable } from '@nestjs/common';
import { CreateDefaultSettingDto } from './dto/create-default-setting.dto';
import { UpdateDefaultSettingDto } from './dto/update-default-setting.dto';

@Injectable()
export class DefaultSettingService {
  create(createDefaultSettingDto: CreateDefaultSettingDto) {
    return 'This action adds a new defaultSetting';
  }

  findAll() {
    return `This action returns all defaultSetting`;
  }

  findOne(id: number) {
    return `This action returns a #${id} defaultSetting`;
  }

  update(id: number, updateDefaultSettingDto: UpdateDefaultSettingDto) {
    return `This action updates a #${id} defaultSetting`;
  }

  remove(id: number) {
    return `This action removes a #${id} defaultSetting`;
  }
}
