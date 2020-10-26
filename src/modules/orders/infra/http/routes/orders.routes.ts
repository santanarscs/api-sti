import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateOrderService from '../../../services/CreateOrderService';
import ListOrdersService from '../../../services/ListOrdersService';
import FindOrderService from '../../../services/FindOrderService';
import UpdateOrderService from '../../../services/UpdateOrderService';

const ordersRoutes = Router();

ordersRoutes.get('/', async (request: Request, response: Response) => {
  const { page, limit, queryName } = request.query;
  const listOrderes = container.resolve(ListOrdersService);
  const [orders, total] = await listOrderes.execute({
    page: Number(page),
    limit: Number(limit),
    queryName: queryName ? String(queryName) : undefined,
  });
  response.header('x-total-count', String(total));
  return response.json(orders);
});

ordersRoutes.get('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;
  const findOrder = container.resolve(FindOrderService);
  const order = await findOrder.execute(id);
  return response.json(order);
});

ordersRoutes.put('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;
  const updateOrder = container.resolve(UpdateOrderService);
  const order = await updateOrder.execute({
    id,
    ...request.body,
  });
  return response.json(order);
});

ordersRoutes.post('/', async (request: Request, response: Response) => {
  const createOrder = container.resolve(CreateOrderService);
  const order = await createOrder.execute(request.body);
  return response.json(order);
});

export default ordersRoutes;
