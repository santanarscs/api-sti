import ICreateMovimentationDTO from '../dtos/ICreateMovimentationDTO';
import IMovimentation from '../models/IMovimentation';

export interface IMovimentationsRepository {
  create(data: ICreateMovimentationDTO): Promise<IMovimentation>;
  findByEquipamentId(equipament_id: string): Promise<IMovimentation[]>;
}
