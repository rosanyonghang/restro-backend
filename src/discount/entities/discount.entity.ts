import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';
import { Coupon } from '../../coupon/entities/coupon.entity';
import { Organization } from '../../organization/entities/organization.entity';
import { OrderProduct } from '../../order-product/entities/order-product.entity';
import { Product } from '../../product/entities/product.entity';
import { Campaign } from '../../campaign/entities/campaign.entity';
import { FlashSale } from '../../flash-sale/entities/flash-sale.entity';

@Entity()
export class Discount extends CoreEntity {
  @Column({
    nullable: false,
  })
  value: number;

  @Column({
    default: 'flat',
    comment: 'flat or percent',
  })
  type?: string;

  @Column({
    default: 'product',
    comment: 'campaign, product, merchant, flashSale or coupon',
  })
  association?: string;

  @Column({
    default: 0,
  })
  above?: number;

  @Column({
    default: 'TND',
  })
  currency?: string;

  @Column({
    nullable: true,
  })
  endDate?: Date | null;

  @Column({
    nullable: true,
  })
  startDate?: Date;

  @ManyToOne(() => OrderProduct)
  orderProd?: OrderProduct;

  @ManyToOne(() => Product)
  product?: Product;

  @ManyToOne(() => Campaign)
  campaign?: Campaign;

  @ManyToOne(() => FlashSale)
  flashSale?: FlashSale;

  @ManyToOne(() => Organization)
  owner?: string;

  @OneToMany(() => Coupon, (coupon) => coupon.discount)
  coupons?: Coupon[];
}
