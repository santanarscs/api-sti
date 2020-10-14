import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import ListEquipamentsService from '../../../services/ListEquipamentsService';
import CreateEquipamentService from '../../../services/CreateEquipamentService';
import movimentationRoutes from './movimentations.routes';
import FindEquipamentService from '../../../services/FindEquipamentService';

const equipamentsRoutes = Router();

equipamentsRoutes.get('/', async (request: Request, response: Response) => {
  const listEquipaments = container.resolve(ListEquipamentsService);
  const equipaments = await listEquipaments.execute();
  return response.json(equipaments);
});

equipamentsRoutes.get('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;
  const findEquipament = container.resolve(FindEquipamentService);
  const equipament = await findEquipament.execute(id);
  return response.json(equipament);
});

equipamentsRoutes.post('/', async (request: Request, response: Response) => {
  const createEquipament = container.resolve(CreateEquipamentService);
  const equipament = await createEquipament.execute(request.body);
  return response.json(equipament);
});
equipamentsRoutes.use('/movimentations', movimentationRoutes);

export default equipamentsRoutes;
