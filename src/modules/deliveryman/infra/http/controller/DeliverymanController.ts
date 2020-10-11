import FindDeliverymanService from '@modules/deliveryman/services/FindDeliverymanService';
import FindDeliverymanByNameService from '@modules/deliveryman/services/FindDeliverymanByNameService';
import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateDeliverymanService from '../../../services/CreateDeliverymanService';

export default class DeliverymansController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const CreateDeliveryman = container.resolve(CreateDeliverymanService);

    const deliveryman = await CreateDeliveryman.execute({ name });

    return response.json(deliveryman);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findDeliveryman = container.resolve(FindDeliverymanService);

    const deliveryman = await findDeliveryman.execute({ id });

    return response.json(deliveryman);
  }

  public async showByName(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { name } = request.params;

    const findDeliveryman = container.resolve(FindDeliverymanByNameService);

    const deliveryman = await findDeliveryman.execute({ name });

    return response.json(deliveryman);
  }
}
