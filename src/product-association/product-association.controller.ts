import { Controller, Get } from '@nestjs/common';
import { ProductAssociationService } from './product-association.service';
import { ProductAssociation } from './entities/product-association.entity';
import { BaseController } from '../base/base.controller';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('product-association')
@ApiBearerAuth()
@ApiTags('ProductAssociation')
export class ProductAssociationController extends BaseController<ProductAssociation> {
  constructor(
    private readonly productAssociationService: ProductAssociationService,
  ) {
    super(productAssociationService);
  }
}
