import { PartialType } from '@nestjs/swagger';
import { CreateProductAssociationDto } from './create-product-association.dto';

export class UpdateProductAssociationDto extends PartialType(CreateProductAssociationDto) {}
