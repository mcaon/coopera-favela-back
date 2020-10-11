import { inject, injectable } from 'tsyringe';

import IProductsRepository from '../repositories/IProductsRepository';
import Product from '../infra/typeorm/entities/Product';

interface IRequest {
  value: number;
}

@injectable()
class FindOrderService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({ value }: IRequest): Promise<Product | undefined> {
    const productsByValue = await this.productsRepository.findByValue(value);

    return productsByValue;
  }
}

export default FindOrderService;
