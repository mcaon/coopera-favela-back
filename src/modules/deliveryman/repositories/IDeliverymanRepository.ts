import Deliveryman from '../infra/typeorm/entities/Deliveryman';

import ICreateDeliverymanDTO from '../dtos/ICreateDeliverymanDTO';

export default interface IDeliverymansRepository {
  create(data: ICreateDeliverymanDTO): Promise<Deliveryman>;
  findByName(name: string): Promise<Deliveryman | undefined>;
  findById(id: string): Promise<Deliveryman | undefined>;
}
