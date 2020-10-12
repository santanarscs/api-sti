import ICreateSpecialtyDTO from '../dtos/ICreateSpecialtyDTO';
import ISpecialty from '../models/ISpecialty';

export interface ISpecialtiesRepository {
  findById(id: string): Promise<ISpecialty | undefined>;
  create(data: ICreateSpecialtyDTO): Promise<ISpecialty>;
  list(): Promise<ISpecialty[]>;
  delete(id: string): Promise<void>;
}
