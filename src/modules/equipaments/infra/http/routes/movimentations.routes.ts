import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateMovimentationService from '../../../services/CreateMovimentationService';
import FindMovimentationsService from '../../../services/FindMovimentationsService';

const movimentationRoutes = Router();

movimentationRoutes.post('/', async (request: Request, response: Response) => {
  const createMovimentation = container.resolve(CreateMovimentationService);
  const movimentation = await createMovimentation.execute(request.body);
  return response.json(movimentation);
});

movimentationRoutes.get(
  '/equipaments/:equipament_id',
  async (request: Request, response: Response) => {
    const { equipament_id } = request.params;
    const findMovimentations = container.resolve(FindMovimentationsService);
    const movimentations = await findMovimentations.execute(equipament_id);

    return response.json(movimentations);
  },
);
export default movimentationRoutes;
