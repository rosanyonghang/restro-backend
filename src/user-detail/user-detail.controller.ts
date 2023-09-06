import { Controller, Get } from '@nestjs/common';
import { UserDetailService } from './user-detail.service';
import { UserDetail } from './entities/user-detail.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('user-detail')
@ApiBearerAuth()
@ApiTags('UserDetail')
export class UserDetailController extends BaseController<UserDetail> {
  constructor(private readonly userDetailService: UserDetailService) {
    super(userDetailService);
  }
}
