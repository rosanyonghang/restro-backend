import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { KitchenActivityService } from './kitchen-activity.service';
import { CreateKitchenActivityDto } from './dto/create-kitchen-activity.dto';
import { UpdateKitchenActivityDto } from './dto/update-kitchen-activity.dto';

@Controller('kitchen-activity')
export class KitchenActivityController {
  constructor(
    private readonly kitchenActivityService: KitchenActivityService,
  ) {}

  @Post()
  create(@Body() createKitchenActivityDto: CreateKitchenActivityDto) {
    return this.kitchenActivityService.create(createKitchenActivityDto);
  }

  @Get()
  findAll() {
    return this.kitchenActivityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kitchenActivityService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateKitchenActivityDto: UpdateKitchenActivityDto,
  ) {
    return this.kitchenActivityService.update(+id, updateKitchenActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kitchenActivityService.remove(+id);
  }
}
