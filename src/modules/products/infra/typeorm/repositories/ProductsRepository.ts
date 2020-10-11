import { getRepository, Repository, In } from 'typeorm';

import IProductsRepository from '../../../repositories/IProductsRepository';
import ICreateProductDTO from '../../../dtos/ICreateProductDTO';
import AppError from '../../../../../shared/errors/AppError';
import Product from '../entities/Product';

interface IFindProducts {
  id: string;
}

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async findById(id: string): Promise<Product | undefined> {
    const findProduct = await this.ormRepository.findOne({
      where: {
        id,
      },
    });

    return findProduct;
  }

  public async findByValue(value: number): Promise<Product | undefined> {
    const findProduct = await this.ormRepository.findOne({
      where: {
        value,
      },
    });

    return findProduct;
  }

  public async create({
    name,
    value,
    description,
    image,
  }: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create({
      name,
      value,
      description,
      image,
    });

    await this.ormRepository.save(product);

    return product;
  }

  public async findByName(name: string): Promise<Product | undefined> {
    const findProduct = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return findProduct;
  }

  public async findAllById(products: IFindProducts[]): Promise<Product[]> {
    const idList = products.map(product => product.id);

    const orderList = await this.ormRepository.find({ id: In(idList) });

    if (idList.length !== orderList.length) {
      throw new AppError('Missing Product');
    }

    return orderList;
  }
}

export default ProductsRepository;
