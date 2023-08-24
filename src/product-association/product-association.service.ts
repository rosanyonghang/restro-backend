import { Injectable } from '@nestjs/common';
import { CreateProductAssociationDto } from './dto/create-product-association.dto';
import { UpdateProductAssociationDto } from './dto/update-product-association.dto';

@Injectable()
export class ProductAssociationService {
  create(createProductAssociationDto: CreateProductAssociationDto) {
    return 'This action adds a new productAssociation';
  }

  findAll() {
    return `This action returns all productAssociation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productAssociation`;
  }

  update(id: number, updateProductAssociationDto: UpdateProductAssociationDto) {
    return `This action updates a #${id} productAssociation`;
  }

  remove(id: number) {
    return `This action removes a #${id} productAssociation`;
  }
}
