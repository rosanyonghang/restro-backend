import { Controller } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { BaseController } from '../base/base.controller';
import { Organization } from './entities/organization.entity';

@Controller('organization')
export class OrganizationController extends BaseController<Organization> {
  constructor(private readonly organizationService: OrganizationService) {
    super(organizationService);
  }
}
