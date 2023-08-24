import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactoryActivityService } from './factory-activity.service';
import { CreateFactoryActivityDto } from './dto/create-factory-activity.dto';
import { UpdateFactoryActivityDto } from './dto/update-factory-activity.dto';

@Controller('factory-activity')
export class FactoryActivityController {
  constructor(private readonly factoryActivityService: FactoryActivityService) {}

  @Post()
  create(@Body() createFactoryActivityDto: CreateFactoryActivityDto) {
    return this.factoryActivityService.create(createFactoryActivityDto);
  }

  @Get()
  findAll() {
    return this.factoryActivityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factoryActivityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFactoryActivityDto: UpdateFactoryActivityDto) {
    return this.factoryActivityService.update(+id, updateFactoryActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factoryActivityService.remove(+id);
  }
}
