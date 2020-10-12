import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import ListEquipamentsService from '../../../services/ListEquipamentsService';
import CreateEquipamentService from '../../../services/CreateEquipamentService';

const equipamentsRoutes = Router();

equipamentsRoutes.get('/', async (request: Request, response: Response) => {
  const listEquipaments = container.resolve(ListEquipamentsService);
  const equipaments = await listEquipaments.execute();
  return response.json(equipaments);
});

equipamentsRoutes.post('/', async (request: Request, response: Response) => {
  const createEquipament = container.resolve(CreateEquipamentService);
  const equipament = await createEquipament.execute(request.body);
  return response.json(equipament);
});

export default equipamentsRoutes;
