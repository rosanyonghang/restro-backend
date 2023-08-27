import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';
import { CouponUsage } from '../../coupon-usage/entities/coupon-usage.entity';
import { Discount } from '../../discount/entities/discount.entity';
import { Product } from '../../product/entities/product.entity';
import { Category } from '../../category/entities/category.entity';
import { Organization } from '../../organization/entities/organization.entity';
import { OrderProduct } from '../../order-product/entities/order-product.entity';

@Entity()
export class Coupon extends CoreEntity {
  @Column({})
  code?: string;

  @Column({
    comment: 'newspaper, television, internet, influencer',
    default: 'RB',
  })
  source?: string;

  @Column({})
  usageLimit?: number;

  @Column({
    nullable: false,
  })
  endDate: Date;

  @Column({
    nullable: false,
  })
  startDate: Date;

  @ManyToMany(() => Product)
  @JoinTable()
  couponProducts?: Product[];

  @ManyToMany(() => Category)
  category?: Category[];

  @ManyToMany(() => Organization)
  owner?: Organization[];

  @Column({
    comment: '0: deleted, 1: active, 3: expired',
    default: 1,
  })
  status?: number;

  @Column({
    nullable: false,
    comment: 'product level, merchant level, category level or order level',
  })
  level: string;

  @ManyToOne(() => Discount, (discount) => discount.coupons)
  discount: Discount;

  @ManyToMany(() => OrderProduct)
  orderProductsCoupon?: OrderProduct[];

  @ManyToMany(() => CouponUsage)
  couponUsage?: CouponUsage[];
}
