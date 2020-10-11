import { inject, injectable } from 'tsyringe';

import IProductsRepository from '../../products/repositories/IProductsRepository';
import IDeliverymanRepository from '../../deliveryman/repositories/IDeliverymanRepository';
import Order from '../infra/typeorm/entities/Order';
import IOrdersRepository from '../repositories/IOrdersRepository';

interface IRequest {
  id: string;
}

@injectable()
class FindOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,

    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,

    @inject('DeliverymanRepository')
    private deliverymanRepository: IDeliverymanRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Order | undefined> {
    const productsById = await this.ordersRepository.findById(id);

    return productsById;
  }
}

export default FindOrderService;
