import { Controller, Get } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { Campaign } from './entities/campaign.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('campaign')
@ApiTags('Campaign')
@ApiBearerAuth()
export class CampaignController extends BaseController<Campaign> {
  constructor(private readonly campaignService: CampaignService) {
    super(campaignService);
  }
}
