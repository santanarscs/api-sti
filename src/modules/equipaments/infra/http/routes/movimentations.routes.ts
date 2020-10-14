import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateMovimentationService from '../../../services/CreateMovimentationService';

const movimentationRoutes = Router();

movimentationRoutes.post('/', async (request: Request, response: Response) => {
  const createMovimentation = container.resolve(CreateMovimentationService);
  const movimentation = await createMovimentation.execute(request.body);
  return response.json(movimentation);
});

export default movimentationRoutes;
