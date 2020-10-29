import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';

import ensureAuthenticade from '../../../../users/infra/http/middlewares/ensureAuthenticated';

import CreateOrderService from '../../../services/CreateOrderService';
import ListOrdersService from '../../../services/ListOrdersService';
import FindOrderService from '../../../services/FindOrderService';
import UpdateOrderService from '../../../services/UpdateOrderService';
import DeleteOrderService from '../../../services/DeleteOrderService';

const ordersRoutes = Router();

ordersRoutes.get(
  '/',
  ensureAuthenticade,
  async (request: Request, response: Response) => {
    const { page, limit, queryName } = request.query;
    const listOrderes = container.resolve(ListOrdersService);
    const [orders, total] = await listOrderes.execute({
      page: Number(page),
      limit: Number(limit),
      queryName: queryName ? String(queryName) : undefined,
    });
    response.header('x-total-count', String(total));
    return response.json(orders);
  },
);

ordersRoutes.get(
  '/:id',
  ensureAuthenticade,
  async (request: Request, response: Response) => {
    const { id } = request.params;
    const findOrder = container.resolve(FindOrderService);
    const order = await findOrder.execute(id);
    return response.json(order);
  },
);

ordersRoutes.post('/', async (request: Request, response: Response) => {
  const createOrder = container.resolve(CreateOrderService);
  const order = await createOrder.execute(request.body);
  return response.json(order);
});

ordersRoutes.put(
  '/:id',
  ensureAuthenticade,
  async (request: Request, response: Response) => {
    const { id } = request.params;
    const solver_id = request.user.id;
    const updateOrder = container.resolve(UpdateOrderService);
    const order = await updateOrder.execute({
      ...request.body,
      solver_id,
      id,
    });
    return response.json(order);
  },
);

ordersRoutes.delete(
  '/:id',
  ensureAuthenticade,
  async (request: Request, response: Response) => {
    const { id } = request.params;

    const deleteOrder = container.resolve(DeleteOrderService);
    await deleteOrder.execute(id);
    return response.status(204).send();
  },
);

export default ordersRoutes;
