import { Column, Entity, OneToMany } from 'typeorm';
import { CoreEntity } from '../../base/entities/base.entity';
import { OrderProduct } from '../../order-product/entities/order-product.entity';

@Entity()
export class Order extends CoreEntity {
  @Column({
    default: 1,
    comment:
      '1: waiting, 2: accepted, 3: onTheRoad, 4: delivered, 5: refused, 6:returned',
  })
  status?: number;

  @Column({
    comment: '0: cash on delivery, 1: paid',
  })
  payment?: number;

  @Column({
    comment: '0: pending, 1: paid',
    default: 0,
  })
  paymentStatus?: number;

  @Column({
    comment: '0: delivery, 1: pickup',
  })
  collect?: number;

  @Column({
    comment: 'delivery prices',
  })
  deliveryPrice?: number;

  @Column({})
  total?: number;

  @Column({
    nullable: true,
  })
  transactionId?: string;

  @OneToMany(() => OrderProduct, (orderProd) => orderProd.order)
  orderProducts: OrderProduct[];
}
