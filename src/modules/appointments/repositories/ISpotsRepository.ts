import ICreateSpotDTO from '../dtos/ICreateSpotDTO';
import ISpot from '../models/ISpot';

interface IFindSpots {
  page?: number;
  limit?: number;
  queryName?: string;
}
export interface ISpotsRepository {
  findById(id: string): Promise<ISpot | undefined>;
  create(data: ICreateSpotDTO): Promise<ISpot>;
  list(data: IFindSpots): Promise<[ISpot[], number]>;
  delete(id: string): Promise<void>;
  save(spot: ISpot): Promise<ISpot>;
}
