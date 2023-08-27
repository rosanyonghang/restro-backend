import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { Organization } from './entities/organization.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrganizationService extends BaseService<Organization> {
  constructor(
    @InjectRepository(Organization)
    private readonly organizationRepository: Repository<Organization>,
  ) {
    super(organizationRepository);
  }

  async getOrganizationByApiKey(key: string) {
    return this.organizationRepository.findOne({
      where: {
        apiKey: key,
      },
    });
  }
}
