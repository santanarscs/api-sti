import { Router } from 'express';

import sectionsRouter from '../modules/sections/infra/http/routes/sections.routes';
import graduationsRouter from '../modules/users/infra/http/routes/graduations.routes';
import specialtiesRouter from '../modules/users/infra/http/routes/specialties.routes';
import boardsRouter from '../modules/users/infra/http/routes/boards.routes';

import usersRouter from '../modules/users/infra/http/routes/users.routes';
import profilesRouter from '../modules/users/infra/http/routes/profiles.routes';
import sessionsRouter from '../modules/users/infra/http/routes/sessions.routes';
import equipamentsRouter from '../modules/equipaments/infra/http/routes/equipaments.routes';
import movimentationRoutes from '../modules/equipaments/infra/http/routes/movimentations.routes';
import ordersRoutes from '../modules/orders/infra/http/routes/orders.routes';
import typesOrderRoutes from '../modules/orders/infra/http/routes/typesOrder.routes';
import spotsRoutes from '../modules/appointments/infra/http/routes/spots.routes';

const routes = Router();

routes.use('/sections', sectionsRouter);
routes.use('/graduations', graduationsRouter);
routes.use('/specialties', specialtiesRouter);
routes.use('/boards', boardsRouter);
routes.use('/users', usersRouter);
routes.use('/profile', profilesRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/equipaments', equipamentsRouter);
routes.use('/movimentations', movimentationRoutes);
routes.use('/orders', ordersRoutes);
routes.use('/types_order', typesOrderRoutes);
routes.use('/spots', spotsRoutes);

export default routes;
