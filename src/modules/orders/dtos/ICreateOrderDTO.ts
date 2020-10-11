import Deliveryman from '../../deliveryman/infra/typeorm/entities/Deliveryman';

interface IProduct {
  product_id: string;
  price: number;
  quantity: number;
}

export default interface ICreateOrderDTO {
  customer: Deliveryman;
  products: IProduct[];
}
