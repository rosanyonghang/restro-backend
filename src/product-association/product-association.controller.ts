import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductAssociationService } from './product-association.service';
import { CreateProductAssociationDto } from './dto/create-product-association.dto';
import { UpdateProductAssociationDto } from './dto/update-product-association.dto';

@Controller('product-association')
export class ProductAssociationController {
  constructor(private readonly productAssociationService: ProductAssociationService) {}

  @Post()
  create(@Body() createProductAssociationDto: CreateProductAssociationDto) {
    return this.productAssociationService.create(createProductAssociationDto);
  }

  @Get()
  findAll() {
    return this.productAssociationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productAssociationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductAssociationDto: UpdateProductAssociationDto) {
    return this.productAssociationService.update(+id, updateProductAssociationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productAssociationService.remove(+id);
  }
}
