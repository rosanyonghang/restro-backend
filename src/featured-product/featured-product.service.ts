import { Injectable } from '@nestjs/common';
import { CreateFeaturedProductDto } from './dto/create-featured-product.dto';
import { UpdateFeaturedProductDto } from './dto/update-featured-product.dto';

@Injectable()
export class FeaturedProductService {
  create(createFeaturedProductDto: CreateFeaturedProductDto) {
    return 'This action adds a new featuredProduct';
  }

  findAll() {
    return `This action returns all featuredProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} featuredProduct`;
  }

  update(id: number, updateFeaturedProductDto: UpdateFeaturedProductDto) {
    return `This action updates a #${id} featuredProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} featuredProduct`;
  }
}
