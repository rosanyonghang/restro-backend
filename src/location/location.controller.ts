import { Controller, Get } from '@nestjs/common';
import { LocationService } from './location.service';
import { Location } from './entities/location.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('location')
@ApiBearerAuth()
@ApiTags('Location')
export class LocationController extends BaseController<Location> {
  constructor(private readonly locationService: LocationService) {
    super(locationService);
  }
}
