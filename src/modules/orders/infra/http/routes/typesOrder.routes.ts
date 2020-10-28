import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateTypeOrderService from '../../../services/CreateTypeOrderService';
import ListTypesOrderService from '../../../services/ListTypesOrderService';

const typesOrderRoutes = Router();

typesOrderRoutes.get('/', async (request: Request, response: Response) => {
  const { page, limit, queryName } = request.query;
  const listTypes = container.resolve(ListTypesOrderService);
  const [types, total] = await listTypes.execute({
    page: Number(page),
    limit: Number(limit),
    queryName: queryName ? String(queryName) : undefined,
  });
  response.header('x-total-count', String(total));
  return response.json(types);
});

typesOrderRoutes.post('/', async (request: Request, response: Response) => {
  const createType = container.resolve(CreateTypeOrderService);
  const type = await createType.execute(request.body);
  return response.json(type);
});

export default typesOrderRoutes;
