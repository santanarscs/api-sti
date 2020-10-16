import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import ListEquipamentsService from '../../../services/ListEquipamentsService';
import CreateEquipamentService from '../../../services/CreateEquipamentService';
import FindEquipamentService from '../../../services/FindEquipamentService';
import UpdateEquipamentService from '../../../services/UpdateEquipamentService';
import DeleteEquipamentService from '../../../services/DeleteEquipamentService';

const equipamentsRoutes = Router();

equipamentsRoutes.get('/', async (request: Request, response: Response) => {
  const { page, limit } = request.query;
  const listEquipaments = container.resolve(ListEquipamentsService);
  const [equipaments, total] = await listEquipaments.execute({
    page: Number(page),
    limit: Number(limit),
  });
  response.header('x-total-count', String(total));
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

equipamentsRoutes.put('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;

  const updateEquipament = container.resolve(UpdateEquipamentService);
  const equipament = await updateEquipament.execute({
    ...request.body,
    id,
  });
  return response.json(equipament);
});

equipamentsRoutes.delete(
  '/:id',
  async (request: Request, response: Response) => {
    const { id } = request.params;

    const deleteEquipament = container.resolve(DeleteEquipamentService);
    await deleteEquipament.execute(id);
    return response.status(204).send();
  },
);

export default equipamentsRoutes;
