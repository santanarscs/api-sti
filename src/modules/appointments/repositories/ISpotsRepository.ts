import ICreateSpotDTO from '../dtos/ICreateSpotDTO';
import ISpot from '../models/ISpot';

interface IFindUsers {
  page?: number;
  limit?: number;
  queryName?: string;
}
export interface ISpotsRepository {
  findById(id: string): Promise<ISpot | undefined>;
  create(data: ICreateSpotDTO): Promise<ISpot>;
  list(data: IFindUsers): Promise<[ISpot[], number]>;
  delete(id: string): Promise<void>;
}
