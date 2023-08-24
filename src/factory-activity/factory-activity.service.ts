import { Injectable } from '@nestjs/common';
import { CreateFactoryActivityDto } from './dto/create-factory-activity.dto';
import { UpdateFactoryActivityDto } from './dto/update-factory-activity.dto';

@Injectable()
export class FactoryActivityService {
  create(createFactoryActivityDto: CreateFactoryActivityDto) {
    return 'This action adds a new factoryActivity';
  }

  findAll() {
    return `This action returns all factoryActivity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} factoryActivity`;
  }

  update(id: number, updateFactoryActivityDto: UpdateFactoryActivityDto) {
    return `This action updates a #${id} factoryActivity`;
  }

  remove(id: number) {
    return `This action removes a #${id} factoryActivity`;
  }
}
