import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import Deliveryman from '../../../../deliveryman/infra/typeorm/entities/Deliveryman';
import OrdersProducts from './OrdersProducts';

@Entity('orders')
class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Deliveryman, { eager: true })
  @JoinColumn({ name: 'deliveryman_id' })
  deliveryman: Deliveryman;

  address: string;

  @OneToMany(() => OrdersProducts, order => order.order, {
    cascade: true,
    eager: true,
  })
  order_products: OrdersProducts[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Order;
