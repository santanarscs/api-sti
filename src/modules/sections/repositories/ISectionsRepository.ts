import ICreateSectionDTO from '../dtos/ICreateSectionDTO';
import ISection from '../models/ISection';

export interface ISectionsRepository {
  findById(id: string): Promise<ISection | undefined>;
  create(data: ICreateSectionDTO): Promise<ISection>;
  list(): Promise<ISection[]>;
  delete(id: string): Promise<void>;
}
