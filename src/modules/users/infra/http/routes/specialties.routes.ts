import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import ListSpecialtiesService from '../../../services/ListSpecialtiesService';
import CreateSpecialtyService from '../../../services/CreateSpecialtyService';

const specialtiesRoutes = Router();

specialtiesRoutes.get('/', async (request: Request, response: Response) => {
  const listSpecialties = container.resolve(ListSpecialtiesService);
  const specialties = await listSpecialties.execute();
  return response.json(specialties);
});

specialtiesRoutes.post('/', async (request: Request, response: Response) => {
  const createSpecialty = container.resolve(CreateSpecialtyService);
  const specialty = await createSpecialty.execute(request.body);
  return response.json(specialty);
});

export default specialtiesRoutes;
