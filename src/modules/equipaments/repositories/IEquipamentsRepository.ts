import ICreateEquipamentDTO from '../dtos/ICreateEquipamentDTO';
import IEquipament from '../models/IEquipament';

interface IFindEquipaments {
  page: number;
  limit: number;
  queryName?: string;
}

export interface IEquipamentsRepository {
  findById(id: string): Promise<IEquipament | undefined>;
  findByBpm(bpm: string): Promise<IEquipament | undefined>;
  create(data: ICreateEquipamentDTO): Promise<IEquipament>;
  list(data: IFindEquipaments): Promise<[IEquipament[], number]>;
  delete(id: string): Promise<void>;
  save(equipament: IEquipament): Promise<IEquipament>;
}
