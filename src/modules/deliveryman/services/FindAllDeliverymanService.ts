import { inject, injectable } from 'tsyringe';

import IDeliverymanRepository from '../repositories/IDeliverymanRepository';
import Deliveryman from '../infra/typeorm/entities/Deliveryman';

interface IRequest {
  id: string;
}

@injectable()
class FindAllDeliverymanService {
  constructor(
    @inject('DeliverymanRepository')
    private deliverymanRepository: IDeliverymanRepository,
  ) {}

  public async execute(): Promise<Deliveryman[] | undefined> {
    const deliverymanById = await this.deliverymanRepository.findAll();

    return deliverymanById;
  }
}

export default FindAllDeliverymanService;
