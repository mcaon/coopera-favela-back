import { Router } from 'express';
import deliverymanRouter from '../../../../modules/deliveryman/infra/http/routes/deliveryman.routes';
import productsRouter from '../../../../modules/products/infra/http/routes/products.routes';
import ordersRouter from '../../../../modules/orders/infra/http/routes/orders.routes';
import usersRouter from '../../../../modules/users/infra/http/routes/users.routes';
import deliveryRouter from '../../../../modules/delivery/infra/http/routes/delivery.routes';

const routes = Router();

routes.use('/deliveryman', deliverymanRouter);
routes.use('/products', productsRouter);
routes.use('/orders', ordersRouter);
routes.use('/users', usersRouter);
routes.use('/delivery', deliveryRouter);

export default routes;
