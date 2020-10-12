import { Router } from 'express';

import sectionsRouter from '../modules/sections/infra/http/routes/sections.routes';
import graduationsRouter from '../modules/users/infra/http/routes/graduations.routes';
import specialtiesRouter from '../modules/users/infra/http/routes/specialties.routes';
import boardsRouter from '../modules/users/infra/http/routes/boards.routes';

import usersRouter from '../modules/users/infra/http/routes/users.routes';
import sessionsRouter from '../modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/sections', sectionsRouter);
routes.use('/graduations', graduationsRouter);
routes.use('/specialties', specialtiesRouter);
routes.use('/boards', boardsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
