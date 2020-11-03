import { injectable, inject } from 'tsyringe';
import { IOrdersRepository } from '../repositories/IOrdersRepository';
import IOrder from '../models/IOrder';
import { ITypesOrderRepository } from '../repositories/ITypesOrderRepository';
import AppError from '../../../AppError';

interface IRequest {
  description: string;

  owner: string;

  type_id: string;
}

@injectable()
export default class CreateOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
    @inject('TypesOrderRepository')
    private typesOrderRepository: ITypesOrderRepository,
  ) {}

  public async execute({
    owner,
    description,
    type_id,
  }: IRequest): Promise<IOrder> {
    const type = await this.typesOrderRepository.findById(type_id);
    if (!type) {
      throw new AppError('Type not found');
    }

    const order = await this.ordersRepository.create({
      owner,
      type,
      description,
      status: 'ABERTO',
    });
    return order;
  }
}
