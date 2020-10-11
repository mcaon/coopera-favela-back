import { Router } from 'express';

import ProductsController from '../controller/ProductsController';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.post('/', productsController.create);
productsRouter.get('/getByName/:name', productsController.showByName);
productsRouter.get('/getById/:id', productsController.show);
productsRouter.get('/getByValue/:value', productsController.showByValue);
productsRouter.get('/', (req, res) => {
  return res.json({ message: 'Ok' });
});

export default productsRouter;
