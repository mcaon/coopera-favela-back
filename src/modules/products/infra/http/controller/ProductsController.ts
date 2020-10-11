import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateProductService from '../../../../products/services/CreateProductService';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({ name, price, quantity });

    if (quantity !== 0) {
      console.log(name);
    }

    if (quantity !== 0) {
      console.log(name);
    }

    return response.json(product);
  }
}
