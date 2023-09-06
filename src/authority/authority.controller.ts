import { Controller, Get } from '@nestjs/common';
import { AuthorityService } from './authority.service';
import { Authority } from './entities/authority.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('authority')
@ApiBearerAuth()
@ApiTags('Authority')
export class AuthorityController extends BaseController<Authority> {
  constructor(private readonly authorityService: AuthorityService) {
    super(authorityService);
  }
}
