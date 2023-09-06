import { Controller } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { BaseController } from '../base/base.controller';
import { Organization } from './entities/organization.entity';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";

@Controller('organization')
@ApiBearerAuth()
@ApiTags('Organization')
export class OrganizationController extends BaseController<Organization> {
  constructor(private readonly organizationService: OrganizationService) {
    super(organizationService);
  }
}
