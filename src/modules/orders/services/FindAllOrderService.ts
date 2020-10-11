import { inject, injectable } from 'tsyringe';

import Order from '../infra/typeorm/entities/Order';
import IOrdersRepository from '../repositories/IOrdersRepository';

@injectable()
class FindAllOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) {}

  public async execute(): Promise<Order[] | undefined> {
    const productsById = await this.ordersRepository.findAll();

    return productsById;
  }
}

export default FindAllOrderService;
