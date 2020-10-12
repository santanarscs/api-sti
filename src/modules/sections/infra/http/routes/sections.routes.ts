import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import ListSectionsService from '../../../services/ListSectionsService';
import CreateSectionService from '../../../services/CreateSectionService';

const sectionsRoutes = Router();

sectionsRoutes.get('/', async (request: Request, response: Response) => {
  const listSections = container.resolve(ListSectionsService);
  const sections = await listSections.execute();
  return response.json(sections);
});

sectionsRoutes.post('/', async (request: Request, response: Response) => {
  const createSection = container.resolve(CreateSectionService);
  const section = await createSection.execute(request.body);
  return response.json(section);
});

export default sectionsRoutes;
