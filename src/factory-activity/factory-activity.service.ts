import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { FactoryActivity } from './entities/factory-activity.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FactoryActivityService extends BaseService<FactoryActivity> {
  constructor(
    @InjectRepository(FactoryActivity)
    private readonly factoryActivityRepository: Repository<FactoryActivity>,
  ) {
    super(factoryActivityRepository);
  }
}
