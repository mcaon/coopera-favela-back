import { inject, injectable } from 'tsyringe';

import AppError from '../../../shared/errors/AppError';

import Deliveryman from '../infra/typeorm/entities/Deliveryman';
import IDeliverymanRepository from '../repositories/IDeliverymanRepository';

interface IRequest {
  name: string;
}

@injectable()
class CreateDeliverymanService {
  constructor(
    @inject('DeliverymanRepository')
    private deliverymanRepository: IDeliverymanRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<Deliveryman> {
    const checkDeliveryman = await this.deliverymanRepository.findByName(name);

    if (checkDeliveryman) {
      throw new AppError('This e-mail is already registered.');
    }

    const deliveryman = await this.deliverymanRepository.create({
      name,
    });

    return deliveryman;
  }
}

export default CreateDeliverymanService;
