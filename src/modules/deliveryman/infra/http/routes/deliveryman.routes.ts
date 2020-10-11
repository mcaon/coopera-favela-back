import { Router } from 'express';

import DeliverymanController from '../controller/DeliverymanController';

const deliverymanRouter = Router();
const deliverymanController = new DeliverymanController();

deliverymanRouter.post('/', deliverymanController.create);
deliverymanRouter.get('/', (req, res) => {
  return res.json({ message: 'Ok' });
});

export default deliverymanRouter;
