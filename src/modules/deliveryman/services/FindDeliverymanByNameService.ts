import { inject, injectable } from 'tsyringe';

import IDeliverymanRepository from '../repositories/IDeliverymanRepository';
import Deliveryman from '../infra/typeorm/entities/Deliveryman';

interface IRequest {
  name: string;
}

@injectable()
class FindDeliverymanByNameService {
  constructor(
    @inject('DeliverymanRepository')
    private deliverymanRepository: IDeliverymanRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<Deliveryman | undefined> {
    const deliverymanByname = await this.deliverymanRepository.findByName(name);

    return deliverymanByname;
  }
}

export default FindDeliverymanByNameService;
