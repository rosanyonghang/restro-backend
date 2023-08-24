import { Module } from '@nestjs/common';
import { ProductAssociationService } from './product-association.service';
import { ProductAssociationController } from './product-association.controller';

@Module({
  controllers: [ProductAssociationController],
  providers: [ProductAssociationService],
})
export class ProductAssociationModule {}
