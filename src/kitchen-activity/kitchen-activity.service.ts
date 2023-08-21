import { Injectable } from '@nestjs/common';
import { CreateKitchenActivityDto } from './dto/create-kitchen-activity.dto';
import { UpdateKitchenActivityDto } from './dto/update-kitchen-activity.dto';

@Injectable()
export class KitchenActivityService {
  create(createKitchenActivityDto: CreateKitchenActivityDto) {
    return 'This action adds a new kitchenActivity';
  }

  findAll() {
    return `This action returns all kitchenActivity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kitchenActivity`;
  }

  update(id: number, updateKitchenActivityDto: UpdateKitchenActivityDto) {
    return `This action updates a #${id} kitchenActivity`;
  }

  remove(id: number) {
    return `This action removes a #${id} kitchenActivity`;
  }
}
