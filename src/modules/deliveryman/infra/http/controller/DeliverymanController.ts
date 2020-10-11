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
}
