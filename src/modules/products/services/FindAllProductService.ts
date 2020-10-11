import { inject, injectable } from 'tsyringe';

import IProductsRepository from '../repositories/IProductsRepository';
import Product from '../infra/typeorm/entities/Product';

@injectable()
class FindOrderService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(): Promise<Product[] | undefined> {
    const products = await this.productsRepository.findAll();

    return products;
  }
}

export default FindOrderService;
