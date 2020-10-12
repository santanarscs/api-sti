import { injectable, inject } from 'tsyringe';
import { IBoardsRepository } from '../repositories/IBoardsRepository';
import IBoard from '../models/IBoard';
import ICreateBoardDTO from '../dtos/ICreateBoardDTO';

@injectable()
export default class CreateBoardService {
  constructor(
    @inject('BoardsRepository')
    private boardsRepository: IBoardsRepository,
  ) {}

  public async execute(data: ICreateBoardDTO): Promise<IBoard> {
    const board = await this.boardsRepository.create(data);
    return board;
  }
}
