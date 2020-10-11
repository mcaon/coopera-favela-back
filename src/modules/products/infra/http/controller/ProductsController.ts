import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateProductService from '../../../services/CreateProductService';
import FindProductService from '../../../services/FindProductService';
import FindAllProductService from '../../../services/FindAllProductService';
import FindProductByNameService from '../../../services/FindProductByNameService';
import FindProductByValueService from '../../../services/FindProductByValueService';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, value, description, image } = request.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      name,
      value,
      description,
      image,
    });

    return response.json(product);
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const findProduct = container.resolve(FindAllProductService);

    const product = await findProduct.execute();

    return response.json(product);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findProduct = container.resolve(FindProductService);

    const product = await findProduct.execute({ id });

    return response.json(product);
  }

  public async showByName(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { name } = request.params;

    const findProduct = container.resolve(FindProductByNameService);

    const product = await findProduct.execute({ name });

    return response.json(product);
  }

  public async showByValue(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const val = request.params.value;

    const value = Number(val);

    const findProduct = container.resolve(FindProductByValueService);

    const product = await findProduct.execute({ value });

    return response.json(product);
  }
}
