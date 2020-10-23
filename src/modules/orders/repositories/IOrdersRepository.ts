import ICreateOrderDTO from '../dtos/ICreateOrderDTO';
import IOrder from '../models/IOrder';

interface IFindOrders {
  page?: number;
  limit?: number;
  queryName?: string;
}

export interface IOrdersRepository {
  findById(id: string): Promise<IOrder | undefined>;
  create(data: ICreateOrderDTO): Promise<IOrder>;
  list(data: IFindOrders): Promise<[IOrder[], number]>;
  delete(id: string): Promise<void>;
  save(equipament: IOrder): Promise<IOrder>;
}
