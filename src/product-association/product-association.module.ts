import { Module } from '@nestjs/common';
import { ProductAssociationService } from './product-association.service';
import { ProductAssociationController } from './product-association.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductAssociation } from './entities/product-association.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductAssociation])],
  controllers: [ProductAssociationController],
  providers: [ProductAssociationService],
})
export class ProductAssociationModule {}
