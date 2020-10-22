import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import ListSectionsService from '../../../services/ListSectionsService';
import CreateSectionService from '../../../services/CreateSectionService';
import FindSectionService from '../../../services/FindSectionService';

const sectionsRoutes = Router();

sectionsRoutes.get('/', async (request: Request, response: Response) => {
  const listSections = container.resolve(ListSectionsService);
  const sections = await listSections.execute();
  return response.json(sections);
});

sectionsRoutes.get('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;
  const findSection = container.resolve(FindSectionService);
  const section = await findSection.execute(id);
  return response.json(section);
});

sectionsRoutes.post('/', async (request: Request, response: Response) => {
  const createSection = container.resolve(CreateSectionService);
  const section = await createSection.execute(request.body);
  return response.json(section);
});

export default sectionsRoutes;
