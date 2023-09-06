import { Controller, Get } from '@nestjs/common';
import { FaqService } from './faq.service';
import { Faq } from './entities/faq.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('faq')
@ApiBearerAuth()
@ApiTags('Faq')
export class FaqController extends BaseController<Faq> {
  constructor(private readonly faqService: FaqService) {
    super(faqService);
  }
}
