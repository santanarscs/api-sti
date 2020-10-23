import { injectable, inject } from 'tsyringe';
import { IOrdersRepository } from '../repositories/IOrdersRepository';
import IOrder from '../models/IOrder';

@injectable()
export default class FindOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) {}

  public async execute(id: string): Promise<IOrder | undefined> {
    const order = await this.ordersRepository.findById(id);
    return order;
  }
}
