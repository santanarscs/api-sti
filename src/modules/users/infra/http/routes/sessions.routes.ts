import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import AuthenticateUserService from '../../../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request: Request, response: Response) => {
  try {
    const { email, password } = request.body;
    const authenticatedUser = container.resolve(AuthenticateUserService);

    const { user, token } = await authenticatedUser.execute({
      email,
      password,
    });

    return response.json({ user: classToClass(user), token });
  } catch (e) {
    return response.status(400).json(e);
  }
});

export default sessionsRouter;
