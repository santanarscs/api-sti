import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import ListBoardsService from '../../../services/ListBoardsService';
import CreateBoardService from '../../../services/CreateBoardService';

const boardsRoutes = Router();

boardsRoutes.get('/', async (request: Request, response: Response) => {
  const listBoards = container.resolve(ListBoardsService);
  const boards = await listBoards.execute();
  return response.json(boards);
});

boardsRoutes.post('/', async (request: Request, response: Response) => {
  const createBoard = container.resolve(CreateBoardService);
  const board = await createBoard.execute(request.body);
  return response.json(board);
});

export default boardsRoutes;
