import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateOrderService from '../../../services/CreateOrderService';
import ListOrdersService from '../../../services/ListOrdersService';

const ordersRoutes = Router();

ordersRoutes.post('/', async (request: Request, response: Response) => {
  const createOrder = container.resolve(CreateOrderService);
  const order = await createOrder.execute(request.body);
  return response.json(order);
});

ordersRoutes.get('/', async (request: Request, response: Response) => {
  const listOrders = container.resolve(ListOrdersService);
  const orders = await listOrders.execute({});
  return response.json(orders);
});

export default ordersRoutes;
