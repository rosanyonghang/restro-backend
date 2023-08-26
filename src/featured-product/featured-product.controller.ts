import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FeaturedProductService } from './featured-product.service';
import { CreateFeaturedProductDto } from './dto/create-featured-product.dto';
import { UpdateFeaturedProductDto } from './dto/update-featured-product.dto';

@Controller('featured-product')
export class FeaturedProductController {
  constructor(private readonly featuredProductService: FeaturedProductService) {}

  @Post()
  create(@Body() createFeaturedProductDto: CreateFeaturedProductDto) {
    return this.featuredProductService.create(createFeaturedProductDto);
  }

  @Get()
  findAll() {
    return this.featuredProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.featuredProductService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFeaturedProductDto: UpdateFeaturedProductDto) {
    return this.featuredProductService.update(+id, updateFeaturedProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.featuredProductService.remove(+id);
  }
}
