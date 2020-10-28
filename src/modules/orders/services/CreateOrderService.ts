import { injectable, inject } from 'tsyringe';
import { IOrdersRepository } from '../repositories/IOrdersRepository';
import IOrder from '../models/IOrder';

interface IRequest {
  description: string;

  user: string;

  type: string;
}

@injectable()
export default class CreateOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) {}

  public async execute(data: IRequest): Promise<IOrder> {
    const order = await this.ordersRepository.create({
      ...data,
      status: 'ABERTO',
    });
    return order;
  }
}
