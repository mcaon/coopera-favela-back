import Product from '../infra/typeorm/entities/Product';

import ICreateProductDTO from '../dtos/ICreateProductDTO';

interface IFindProducts {
  id: string;
}

export default interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>;
  findByValue(value: number): Promise<Product | undefined>;
  findById(id: string): Promise<Product | undefined>;
  findByName(name: string): Promise<Product | undefined>;
  findAllById(products: IFindProducts[]): Promise<Product[]>;
}
