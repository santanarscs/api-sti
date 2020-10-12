import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import ListGraduationsService from '../../../services/ListGraduationsService';
import CreateGraduationService from '../../../services/CreateGraduationService';

const graduationsRoutes = Router();

graduationsRoutes.get('/', async (request: Request, response: Response) => {
  const listGraduations = container.resolve(ListGraduationsService);
  const graduations = await listGraduations.execute();
  return response.json(graduations);
});

graduationsRoutes.post('/', async (request: Request, response: Response) => {
  const createGraduation = container.resolve(CreateGraduationService);
  const graduation = await createGraduation.execute(request.body);
  return response.json(graduation);
});

export default graduationsRoutes;
