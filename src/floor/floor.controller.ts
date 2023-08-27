import { Controller } from '@nestjs/common';
import { FloorService } from './floor.service';
import { Floor } from './entities/floor.entity';
import { BaseController } from '../base/base.controller';

@Controller('floor')
export class FloorController extends BaseController<Floor> {
  constructor(private readonly floorService: FloorService) {
    super(floorService);
  }
}
