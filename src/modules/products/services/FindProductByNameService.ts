import { inject, injectable } from 'tsyringe';

import IProductsRepository from '../repositories/IProductsRepository';
import Product from '../infra/typeorm/entities/Product';

interface IRequest {
  name: string;
}

@injectable()
class FindOrderService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<Product | undefined> {
    const productsByName = await this.productsRepository.findByName(name);

    return productsByName;
  }
}

export default FindOrderService;
