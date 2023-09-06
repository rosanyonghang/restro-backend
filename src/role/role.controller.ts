import { Controller, Get } from '@nestjs/common';
import { RoleService } from './role.service';
import { Role } from './entities/role.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('role')
@ApiBearerAuth()
@ApiTags('Role')
export class RoleController extends BaseController<Role> {
  constructor(private readonly roleService: RoleService) {
    super(roleService);
  }
}
