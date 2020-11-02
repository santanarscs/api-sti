import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateSpotService from '../../../services/CreateSpotService';
import ListSpotsService from '../../../services/ListSpotsService';
import FindSpotService from '../../../services/FindSpotsService';
import DeleteSpotService from '../../../services/DeleteSpotService';
import UpdateSpotsService from '../../../services/UpdateSpotService';

const spotsRoutes = Router();

spotsRoutes.get('/', async (request: Request, response: Response) => {
  const { page, limit, queryName } = request.query;
  const listSpots = container.resolve(ListSpotsService);
  const [spots, total] = await listSpots.execute({
    page: Number(page),
    limit: Number(limit),
    queryName: queryName ? String(queryName) : undefined,
  });
  response.header('x-total-count', String(total));
  return response.json(spots);
});

spotsRoutes.get('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;
  const findSpot = container.resolve(FindSpotService);
  const spot = await findSpot.execute(id);
  return response.json(spot);
});

spotsRoutes.post('/', async (request: Request, response: Response) => {
  const createSpot = container.resolve(CreateSpotService);
  const spot = await createSpot.execute(request.body);
  return response.json(spot);
});

spotsRoutes.delete('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;
  const deleteSpot = container.resolve(DeleteSpotService);
  await deleteSpot.execute(id);
  return response.status(204).send();
});

spotsRoutes.put('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;

  const updateSpot = container.resolve(UpdateSpotsService);
  const spot = await updateSpot.execute({
    ...request.body,
    id,
  });
  return response.json(spot);
});

export default spotsRoutes;
