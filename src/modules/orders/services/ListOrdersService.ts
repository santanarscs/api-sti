import { injectable, inject } from 'tsyringe';
import { IOrdersRepository } from '../repositories/IOrdersRepository';
import IOrder from '../models/IOrder';

interface IRequest {
  page?: number;
  limit?: number;
  queryName?: string;
}

@injectable()
export default class ListOrdersService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) {}

  public async execute({
    page,
    limit,
    queryName,
  }: IRequest): Promise<[IOrder[], number]> {
    const orders = await this.ordersRepository.list({
      page,
      limit,
      queryName,
    });

    return orders;
  }
}
