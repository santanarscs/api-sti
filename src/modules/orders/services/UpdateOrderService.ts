import { inject, injectable } from 'tsyringe';
import AppError from '../../../AppError';
import { IOrdersRepository } from '../repositories/IOrdersRepository';
import IOrder from '../models/IOrder';
import { IUsersRepository } from '../../users/repositories/IUsersRepository';

interface IRequest {
  id: string;

  description: string;

  user: string;

  type: string;

  status: string;

  solver_id: string;

  resolution: string;
}

@injectable()
export default class UpdateOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    id,
    description,
    resolution,
    user,
    status,
    type,
    solver_id,
  }: IRequest): Promise<IOrder> {
    const order = await this.ordersRepository.findById(id);

    if (!order) {
      throw new AppError('Order not found!');
    }
    const solver = await this.usersRepository.findById(solver_id);
    if (!solver) {
      throw new AppError('Solver not found!');
    }

    const resolution_date = new Date();

    Object.assign(order, {
      description,
      resolution,
      resolution_date,
      user,
      status,
      type,
      solver,
    });

    return this.ordersRepository.save(order);
  }
}
