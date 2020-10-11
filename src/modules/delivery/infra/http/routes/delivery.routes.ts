import { Router } from 'express';

const deliveryRouter = Router();

deliveryRouter.get('/', (req, res) => {
  return res.json({ message: 'Ok' });
});

export default deliveryRouter;
