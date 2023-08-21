import { Injectable } from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Faq } from './entities/faq.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FaqService {
  constructor(
    @InjectRepository(Faq)
    private faqRepository: Repository<Faq>,
  ) {}

  create(createFaqDto: CreateFaqDto) {
    return this.faqRepository.save(createFaqDto);
  }

  findAll() {
    // return this.faqRepository.find();
    return this.faqRepository.createQueryBuilder('faq').getMany();
  }

  findOne(id: number) {
    return this.faqRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  findByCategory(id: number) {
    return this.faqRepository
      .createQueryBuilder()
      .where('categoryId = :id', { id: id })
      .getMany();
  }

  update(id: number, updateFaqDto: UpdateFaqDto) {
    return this.faqRepository
      .createQueryBuilder()
      .update(Faq)
      .set({
        ...updateFaqDto,
      })
      .where('id = :id', { id: 1 })
      .execute();
  }

  remove(id: number) {
    return this.faqRepository.delete(id);
  }
}
