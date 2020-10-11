import Deliveryman from '../../deliveryman/infra/typeorm/entities/Deliveryman';

interface IProduct {
  product_id: string;
  value: number;
  description: string;
  image: string;
}

export default interface ICreateOrderDTO {
  customer: Deliveryman;
  products: IProduct[];
}
