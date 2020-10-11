import { inject, injectable } from 'tsyringe';

import IDeliverymanRepository from '../repositories/IDeliverymanRepository';
import Deliveryman from '../infra/typeorm/entities/Deliveryman';

interface IRequest {
  id: string;
}

@injectable()
class FindDeliverymanService {
  constructor(
    @inject('DeliverymanRepository')
    private deliverymanRepository: IDeliverymanRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Deliveryman | undefined> {
    const deliverymanById = await this.deliverymanRepository.findById(id);

    return deliverymanById;
  }
}

export default FindDeliverymanService;
