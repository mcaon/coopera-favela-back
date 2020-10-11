import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateOrderService from '../../../services/CreateOrderService';
import FindAllOrderService from '../../../services/FindAllOrderService';
import FindOrderService from '../../../../products/services/FindProductService';

export default class OrdersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findOrder = container.resolve(FindOrderService);

    const order = await findOrder.execute({ id });

    return response.json(order);
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const findOrder = container.resolve(FindAllOrderService);

    const order = await findOrder.execute();

    return response.json(order);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { deliveryman_id, products } = request.body;

    const customer_id = deliveryman_id;

    const createOrder = container.resolve(CreateOrderService);

    const order = await createOrder.execute({ customer_id, products });

    return response.json(order);
  }
}
