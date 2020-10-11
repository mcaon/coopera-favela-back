import { Router } from 'express';

import OrdersController from '../controller/OrdersController';

const ordersRouter = Router();
const ordersController = new OrdersController();

ordersRouter.post('/', ordersController.create);
ordersRouter.get('/:id', ordersController.show);
ordersRouter.get('/', ordersController.list);
// ordersRouter.get('/', (req, res) => {
//   return res.json({ message: 'Ok' });
// });

export default ordersRouter;
