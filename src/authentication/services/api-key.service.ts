// api-key.service.ts
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { OrganizationService } from '../../organization/organization.service';

@Injectable()
export class ApiKeyService {
  constructor(private readonly organizationService: OrganizationService) {}

  async generateApiKey(organizationId: string): Promise<string> {
    const apiKey = uuidv4(); // Generate a UUID as API key

    // Store the API key in your database
    await this.organizationService.update({ id: +organizationId, apiKey });

    return apiKey;
  }

  async getOrganizationByApiKey(apiKey: string) {
    return this.organizationService.getOrganizationByApiKey(apiKey);
  }
}
