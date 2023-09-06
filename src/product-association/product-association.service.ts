import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { ProductAssociation } from './entities/product-association.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductAssociationService extends BaseService<ProductAssociation> {
  constructor(
    @InjectRepository(ProductAssociation)
    private readonly productAssociationRepository: Repository<ProductAssociation>,
  ) {
    super(productAssociationRepository);
  }
}
