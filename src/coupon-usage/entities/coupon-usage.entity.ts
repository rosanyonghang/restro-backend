import { Column, CreateDateColumn, Entity, ManyToOne } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';
import { Order } from '../../order/entities/order.entity';
import { Coupon } from '../../coupon/entities/coupon.entity';
import { User } from '../../user/entities/user.entity';
import { OrderProduct } from '../../order-product/entities/order-product.entity';

@Entity()
export class CouponUsage extends CoreEntity {
  @ManyToOne(() => Coupon)
  couponId?: Coupon;

  @ManyToOne(() => User)
  userId?: User;

  @ManyToOne(() => OrderProduct)
  orderProdId?: OrderProduct;

  @ManyToOne(() => Order)
  orderId?: Order;
}
