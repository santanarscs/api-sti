import { getRepository, Repository } from 'typeorm';
import Order from '../entities/Order';
import { IOrdersRepository } from '../../../repositories/IOrdersRepository';
import ICreateOrderDTO from '../../../dtos/ICreateOrderDTO';

export default class OrdersRepository implements IOrdersRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  public async findById(id: string): Promise<Order | undefined> {
    const order = await this.ormRepository.findOne(id);
    return order;
  }

  public async list({
    page,
    limit,
    queryName,
  }: {
    page?: number;
    limit?: number;
    queryName?: string | undefined;
  }): Promise<[Order[], number]> {
    const query = this.ormRepository
      .createQueryBuilder('orders')
      .leftJoinAndSelect('orders.type', 'types_orders');

    if (page && limit) {
      query.skip((page - 1) * limit).take(limit);
    }

    if (queryName) {
      query.where('description ILIKE :description', {
        description: `%${queryName}%`,
      });
    }
    const orders = await query.getManyAndCount();

    return orders;
  }

  public async create(data: ICreateOrderDTO): Promise<Order> {
    const order = this.ormRepository.create(data);

    await this.ormRepository.save(order);

    return order;
  }

  public async save(order: Order): Promise<Order> {
    return this.ormRepository.save(order);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
