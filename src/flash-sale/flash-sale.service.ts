import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { FlashSale } from './entities/flash-sale.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FlashSaleService extends BaseService<FlashSale> {
  constructor(
    @InjectRepository(FlashSale)
    private readonly flashSaleRepository: Repository<FlashSale>,
  ) {
    super(flashSaleRepository);
  }
}
