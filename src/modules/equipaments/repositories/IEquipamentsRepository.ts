import ICreateEquipamentDTO from '../dtos/ICreateEquipamentDTO';
import IEquipament from '../models/IEquipament';

interface IFindEquipaments {
  page: number;
  limit: number;
}

export interface IEquipamentsRepository {
  findById(id: string): Promise<IEquipament | undefined>;
  create(data: ICreateEquipamentDTO): Promise<IEquipament>;
  list(data: IFindEquipaments): Promise<[IEquipament[], number]>;
  delete(id: string): Promise<void>;
  save(equipament: IEquipament): Promise<IEquipament>;
}
