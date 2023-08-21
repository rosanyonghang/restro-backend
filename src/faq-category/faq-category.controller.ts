import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { FaqCategoryService } from './faq-category.service';
import { CreateFaqCategoryDto } from './dto/create-faq-category.dto';
import { UpdateFaqCategoryDto } from './dto/update-faq-category.dto';

@Controller('faq-category')
export class FaqCategoryController {
  constructor(private readonly faqCategoryService: FaqCategoryService) {}

  @Post()
  create(@Body() createFaqCategoryDto: CreateFaqCategoryDto) {
    return this.faqCategoryService.create(createFaqCategoryDto);
  }

  @Get()
  findAll() {
    return this.faqCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.faqCategoryService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateFaqCategoryDto: UpdateFaqCategoryDto,
  ) {
    return this.faqCategoryService.update(+id, updateFaqCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.faqCategoryService.remove(+id);
  }
}
