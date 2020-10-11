import { inject, injectable } from 'tsyringe';

import AppError from '../../../shared/errors/AppError';

import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

interface IRequest {
  name: string;
  value: number;
  description: string;
  image: string;
}

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({
    name,
    value,
    description,
    image,
  }: IRequest): Promise<Product> {
    const checkProduct = await this.productsRepository.findByName(name);

    if (checkProduct) {
      throw new AppError('Product alread registered.');
    }

    const product = await this.productsRepository.create({
      name,
      value,
      description,
      image,
    });

    return product;
  }
}

export default CreateProductService;
