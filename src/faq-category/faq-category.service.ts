import { Injectable } from '@nestjs/common';
import { CreateFaqCategoryDto } from './dto/create-faq-category.dto';
import { UpdateFaqCategoryDto } from './dto/update-faq-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FaqCategory } from './entities/faq-category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FaqCategoryService {
  constructor(
    @InjectRepository(FaqCategory)
    private faqCategoryRepository: Repository<FaqCategory>,
  ) {}

  create(createFaqCategoryDto: CreateFaqCategoryDto) {
    return this.faqCategoryRepository.save(createFaqCategoryDto);
  }

  findAll() {
    // return this.faqCategoryRepository.find();
    return this.faqCategoryRepository
      .createQueryBuilder('faqCategory')
      .getMany();
  }

  findOne(id: number) {
    return this.faqCategoryRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateFaqCategoryDto: UpdateFaqCategoryDto) {
    return this.faqCategoryRepository
      .createQueryBuilder()
      .update(FaqCategory)
      .set({
        ...updateFaqCategoryDto,
      })
      .where('id = :id', { id: 1 })
      .execute();
  }

  remove(id: number) {
    return this.faqCategoryRepository.delete(id);
  }
}
