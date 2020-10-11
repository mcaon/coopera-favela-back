import { getRepository, Repository } from 'typeorm';

import AppError from '../../../../../shared/errors/AppError';
import IDeliverymanRepository from '../../../repositories/IDeliverymanRepository';
import ICreateDeliverymanDTO from '../../../dtos/ICreateDeliverymanDTO';
import Deliveryman from '../entities/Deliveryman';

class DeliverymanRepository implements IDeliverymanRepository {
  private ormRepository: Repository<Deliveryman>;

  constructor() {
    this.ormRepository = getRepository(Deliveryman);
  }

  public async findAll(): Promise<Deliveryman[] | undefined> {
    const deliverymanList = await this.ormRepository.find();

    if (deliverymanList.length < 1) {
      throw new AppError('Missing Products');
    }

    return deliverymanList;
  }

  public async create({ name }: ICreateDeliverymanDTO): Promise<Deliveryman> {
    const deliveryman = this.ormRepository.create({
      name,
    });

    await this.ormRepository.save(deliveryman);

    return deliveryman;
  }

  public async findById(id: string): Promise<Deliveryman | undefined> {
    const findDeliveryman = await this.ormRepository.findOne(id);

    return findDeliveryman;
  }

  public async findByName(name: string): Promise<Deliveryman | undefined> {
    const findDeliveryman = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return findDeliveryman;
  }
}

export default DeliverymanRepository;
