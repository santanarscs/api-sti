import ICreateGraduationDTO from '../dtos/ICreateGraduationDTO';
import IGraduation from '../models/IGraduation';

export interface IGraduationsRepository {
  findById(id: string): Promise<IGraduation | undefined>;
  create(data: ICreateGraduationDTO): Promise<IGraduation>;
  list(): Promise<IGraduation[]>;
  delete(id: string): Promise<void>;
}
