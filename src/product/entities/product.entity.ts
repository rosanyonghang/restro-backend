import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';
import { ProductSpecification } from '../../product-specification/entities/product-specification.entity';
import { Category } from '../../category/entities/category.entity';
import { Organization } from '../../organization/entities/organization.entity';
import { Discount } from '../../discount/entities/discount.entity';
import { ProductAssociation } from '../../product-association/entities/product-association.entity';
import { ProductVariant } from '../../product-variant/entities/product-variant.entity';
import { CouponUsage } from '../../coupon-usage/entities/coupon-usage.entity';
import { Coupon } from '../../coupon/entities/coupon.entity';
import { ItemBatch } from '../../item-batch/entities/item-batch.entity';
import { Campaign } from '../../campaign/entities/campaign.entity';
import { File } from '../../file/entities/file.entity';
import { ProductAttribute } from '../../product-attribute/entities/product-attribute.entity';
import { Warehouse } from '../../warehouse/entities/warehouse.entity';
import { Location } from '../../location/entities/location.entity';
import { StockTransfer } from '../../stock-transfer/entities/stock-transfer.entity';

@Entity()
export class Product extends CoreEntity {
  @Column()
  title?: string;

  @Column({})
  description?: string;

  @Column({})
  price?: number;

  @Column({})
  img?: string;

  @ManyToMany(() => File)
  @JoinTable()
  images?: File[];

  @Column({
    default: 0,
  })
  qte?: number;

  @Column({
    default: 0,
  })
  sold?: number;

  @Column({})
  brand?: string;

  @Column({
    comment: '0: deleted, 1: active, 2: user deleted(for history',
    default: 1,
  })
  status?: number;

  @Column({})
  shipping?: boolean;

  @Column({})
  collect?: boolean;

  @Column({})
  currency?: string;

  @Column({})
  symbole?: string;

  @OneToMany(() => ProductSpecification, (specs) => specs.product)
  specifications?: ProductSpecification[];

  @OneToMany(() => ProductAttribute, (attr) => attr.product)
  attributes?: ProductAttribute[];

  // @Column({
  //
  //   required:false,
  //   itemType: {title:'string', value:'string', price: 'string'}
  // })
  // variants?: {title:string, value:string, price:string}[];

  @ManyToOne(() => Organization)
  owner: string;

  @ManyToMany(() => Category)
  @JoinTable()
  Category?: string;

  @OneToMany(() => Discount, (disc) => disc.product)
  discounts?: Discount[];

  @OneToMany(() => ItemBatch, (batch) => batch.item)
  batches: ItemBatch[];

  @OneToMany(() => ProductAssociation, (association) => association.product)
  productAssociations?: ProductAssociation[];

  @OneToMany(() => ProductVariant, (variant) => variant.product)
  variants?: ProductVariant[];

  @ManyToMany(() => CouponUsage)
  @JoinTable()
  coupons?: Coupon[];

  @ManyToMany(() => CouponUsage)
  @JoinTable()
  couponUsages?: CouponUsage;

  @ManyToMany(() => Campaign)
  @JoinTable()
  campaigns?: Campaign[];

  @ManyToMany(() => Location)
  @JoinTable()
  locations: Location[];

  @ManyToMany(() => Warehouse)
  @JoinTable()
  warehouses: Warehouse[];

  @OneToMany(() => StockTransfer, (transfer) => transfer.product)
  transfers: StockTransfer[];
}
