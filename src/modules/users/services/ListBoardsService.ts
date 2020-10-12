import { injectable, inject } from 'tsyringe';
import { IBoardsRepository } from '../repositories/IBoardsRepository';
import IBoard from '../models/IBoard';

@injectable()
export default class ListBoardsService {
  constructor(
    @inject('BoardsRepository')
    private boardsRepository: IBoardsRepository,
  ) {}

  public async execute(): Promise<IBoard[]> {
    const boards = await this.boardsRepository.list();
    return boards;
  }
}
