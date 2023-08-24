import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DefaultSettingService } from './default-setting.service';
import { CreateDefaultSettingDto } from './dto/create-default-setting.dto';
import { UpdateDefaultSettingDto } from './dto/update-default-setting.dto';

@Controller('default-setting')
export class DefaultSettingController {
  constructor(private readonly defaultSettingService: DefaultSettingService) {}

  @Post()
  create(@Body() createDefaultSettingDto: CreateDefaultSettingDto) {
    return this.defaultSettingService.create(createDefaultSettingDto);
  }

  @Get()
  findAll() {
    return this.defaultSettingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.defaultSettingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDefaultSettingDto: UpdateDefaultSettingDto) {
    return this.defaultSettingService.update(+id, updateDefaultSettingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.defaultSettingService.remove(+id);
  }
}
