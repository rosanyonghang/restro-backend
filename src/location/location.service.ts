import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { Location } from './entities/location.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LocationService extends BaseService<Location> {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {
    super(locationRepository);
  }
}
