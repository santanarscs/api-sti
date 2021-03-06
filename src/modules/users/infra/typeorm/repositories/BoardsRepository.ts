import { getRepository, Repository } from 'typeorm';
import Board from '../entities/Board';
import ICreateBoardDTO from '../../../dtos/ICreateBoardDTO';
import { IBoardsRepository } from '../../../repositories/IBoardsRepository';

export default class BoardsRepository implements IBoardsRepository {
  private ormRepository: Repository<Board>;

  constructor() {
    this.ormRepository = getRepository(Board);
  }

  public async findById(id: string): Promise<Board | undefined> {
    const board = await this.ormRepository.findOne(id);
    return board;
  }

  public async list(): Promise<Board[]> {
    const boards = await this.ormRepository.find();
    return boards;
  }

  public async create(data: ICreateBoardDTO): Promise<Board> {
    const board = this.ormRepository.create(data);

    await this.ormRepository.save(board);

    return board;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
