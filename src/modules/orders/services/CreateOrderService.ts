import { inject, injectable } from 'tsyringe';

import AppError from '../../../shared/errors/AppError';

import IProductsRepository from '../../products/repositories/IProductsRepository';
import IDeliverymanRepository from '../../deliveryman/repositories/IDeliverymanRepository';
import Order from '../infra/typeorm/entities/Order';
import IOrdersRepository from '../repositories/IOrdersRepository';

interface IProduct {
  id: string;
  value: number;
  description: string;
  image: string;
}

interface IRequest {
  customer_id: string;
  products: IProduct[];
}

@injectable()
class CreateOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,

    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,

    @inject('DeliverymanRepository')
    private deliverymanRepository: IDeliverymanRepository,
  ) {}

  public async execute({ customer_id, products }: IRequest): Promise<Order> {
    const customer = await this.deliverymanRepository.findById(customer_id);

    if (!customer) {
      throw new AppError('Customer does not exists');
    }

    const productsIds = products.map(product => {
      return { id: product.id };
    });

    const productsData = await this.productsRepository.findAllById(productsIds);

    const productsFinal = productsData.map(productData => {
      const productFinal = products.find(
        productFind => productFind.id === productData.id,
      );

      return {
        product_id: productData.id,
        value: productData.value || 0,
        description: productFinal?.description || '',
        image: productFinal?.image || '',
      };
    });

    const order = await this.ordersRepository.create({
      customer,
      products: productsFinal,
    });

    return order;
  }
}

export default CreateOrderService;
