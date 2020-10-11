import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateProductService from '../../../services/CreateProductService';

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
}
