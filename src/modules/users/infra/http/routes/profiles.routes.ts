import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import FindUserService from '../../../services/FindUserService';
import UpdateProfileService from '../../../services/UpdateProfileService';

const profilesRouter = Router();

profilesRouter.use(ensureAuthenticated);

profilesRouter.get('/', async (request: Request, response: Response) => {
  const user_id = request.user.id;
  const showProfile = container.resolve(FindUserService);
  const user = await showProfile.execute(user_id);
  return response.json(classToClass(user));
});

profilesRouter.put('/', async (request: Request, response: Response) => {
  const user_id = request.user.id;
  const { name, email, password, old_password } = request.body;

  const updateProfile = container.resolve(UpdateProfileService);
  const user = await updateProfile.execute({
    name,
    email,
    old_password,
    password,
    user_id,
  });
  return response.json(classToClass(user));
});

export default profilesRouter;
