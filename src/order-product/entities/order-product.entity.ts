import { Column, Entity, ManyToOne, OneToOne } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';
import { Order } from '../../order/entities/order.entity';
import { Coupon } from '../../coupon/entities/coupon.entity';
import { CouponUsage } from '../../coupon-usage/entities/coupon-usage.entity';
import { Discount } from '../../discount/entities/discount.entity';
import { Product } from '../../product/entities/product.entity';
import { ProductVariant } from '../../product-variant/entities/product-variant.entity';

@Entity()
export class OrderProduct extends CoreEntity {
  @OneToOne(() => Discount, { nullable: true })
  discount?: Discount;

  @ManyToOne(() => Order, (order) => order.orderProducts, { nullable: true })
  order?: Order;

  @OneToOne(() => Product)
  product?: Product;

  @OneToOne(() => Coupon, { nullable: true })
  coupon?: Coupon;

  @OneToOne(() => CouponUsage, { nullable: true })
  couponUsage?: CouponUsage;

  @OneToOne(() => ProductVariant, { nullable: true })
  productVariant?: ProductVariant;
}
