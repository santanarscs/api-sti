import ICreateEquipamentDTO from '../dtos/ICreateEquipamentDTO';
import IEquipament from '../models/IEquipament';

export interface IEquipamentsRepository {
  findById(id: string): Promise<IEquipament | undefined>;
  create(data: ICreateEquipamentDTO): Promise<IEquipament>;
  list(): Promise<IEquipament[]>;
  delete(id: string): Promise<void>;
}
