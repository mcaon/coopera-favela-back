import { Router } from 'express';

const deliverymanRouter = Router();

deliverymanRouter.get('/', (req, res) => {
  return res.json({ user: 'ok' });
});

export default deliverymanRouter;
