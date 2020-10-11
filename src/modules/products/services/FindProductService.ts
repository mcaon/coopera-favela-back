import { inject, injectable } from 'tsyringe';

import IProductsRepository from '../repositories/IProductsRepository';
import Product from '../infra/typeorm/entities/Product';

interface IRequest {
  id: string;
}

@injectable()
class FindOrderService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Product | undefined> {
    const productsById = await this.productsRepository.findById(id);

    return productsById;
  }
}

export default FindOrderService;
