import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateOrderService from '../../../services/CreateOrderService';
import ListOrdersService from '../../../services/ListOrdersService';
import FindOrderService from '../../../services/FindOrderService';

const ordersRoutes = Router();

ordersRoutes.get('/', async (request: Request, response: Response) => {
  const listOrders = container.resolve(ListOrdersService);
  const orders = await listOrders.execute({});
  return response.json(orders);
});

ordersRoutes.get('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;
  const findOrder = container.resolve(FindOrderService);
  const order = await findOrder.execute(id);
  return response.json(order);
});

ordersRoutes.post('/', async (request: Request, response: Response) => {
  const createOrder = container.resolve(CreateOrderService);
  const order = await createOrder.execute(request.body);
  return response.json(order);
});

export default ordersRoutes;
