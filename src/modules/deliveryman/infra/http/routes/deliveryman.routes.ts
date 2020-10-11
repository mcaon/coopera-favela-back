import { Router } from 'express';

import DeliverymanController from '../controller/DeliverymanController';

const deliverymanRouter = Router();
const deliverymanController = new DeliverymanController();

deliverymanRouter.post('/', deliverymanController.create);
deliverymanRouter.get('/getByName/:name', deliverymanController.showByName);
deliverymanRouter.get('/getById/:id', deliverymanController.show);
deliverymanRouter.get('/', deliverymanController.list);

export default deliverymanRouter;
