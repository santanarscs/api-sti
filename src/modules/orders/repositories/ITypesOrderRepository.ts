import ICreateTypeOrderDTO from '../dtos/ICreateTypeOrderDTO';
import ITypeOrder from '../models/ITypeOrder';

interface IFindTypes {
  page?: number;
  limit?: number;
  queryName?: string;
}

export interface ITypesOrderRepository {
  findById(id: string): Promise<ITypeOrder | undefined>;
  create(data: ICreateTypeOrderDTO): Promise<ITypeOrder>;
  list(data: IFindTypes): Promise<[ITypeOrder[], number]>;
  delete(id: string): Promise<void>;
  save(equipament: ITypeOrder): Promise<ITypeOrder>;
}
