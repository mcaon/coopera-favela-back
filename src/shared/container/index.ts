import { container } from 'tsyringe';

import IDeliverymanRepository from '../../modules/deliveryman/repositories/IDeliverymanRepository';
import DeliverymanRepository from '../../modules/deliveryman/infra/typeorm/repositories/DeliverymanRepository';

import IProductsRepository from '../../modules/products/repositories/IProductsRepository';
import ProductsRepository from '../../modules/products/infra/typeorm/repositories/ProductsRepository';

// import IOrdersRepository from '../../modules/orders/repositories/IOrdersRepository';
// import OrdersRepository from '../../modules/orders/infra/typeorm/repositories/OrdersRepository';

container.registerSingleton<IDeliverymanRepository>(
  'DeliverymanRepository',
  DeliverymanRepository,
);
container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);
// container.registerSingleton<IOrdersRepository>(
//   'OrdersRepository',
//   OrdersRepository,
// );
