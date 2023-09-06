import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { Campaign } from './entities/campaign.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CampaignService extends BaseService<Campaign> {
  constructor(
    @InjectRepository(Campaign)
    private readonly campaignRepository: Repository<Campaign>,
  ) {
    super(campaignRepository);
  }
}
