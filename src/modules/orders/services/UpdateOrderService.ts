import { inject, injectable } from 'tsyringe';
import AppError from '../../../AppError';
import { IOrdersRepository } from '../repositories/IOrdersRepository';
import IOrder from '../models/IOrder';

interface IRequest {
  id: string;

  description: string;

  user: string;

  type: string;

  status: string;

  solver_id: string;

  resolution: string;

  resolution_date: Date;
}

@injectable()
export default class UpdateOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) {}

  public async execute({
    id,
    description,
    resolution,
    resolution_date,
    solver_id,
    user,
    status,
    type,
  }: IRequest): Promise<IOrder> {
    const order = await this.ordersRepository.findById(id);

    if (!order) {
      throw new AppError('Order not found!');
    }

    Object.assign(order, {
      description,
      resolution,
      resolution_date,
      user,
      status,
      type,
      solver_id,
    });

    return this.ordersRepository.save(order);
  }
}
