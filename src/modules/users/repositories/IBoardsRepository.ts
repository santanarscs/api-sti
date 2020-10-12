import ICreateBoardDTO from '../dtos/ICreateBoardDTO';
import IBoard from '../models/IBoard';

export interface IBoardsRepository {
  findById(id: string): Promise<IBoard | undefined>;
  create(data: ICreateBoardDTO): Promise<IBoard>;
  list(): Promise<IBoard[]>;
  delete(id: string): Promise<void>;
}
