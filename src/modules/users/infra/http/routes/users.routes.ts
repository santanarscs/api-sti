import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import ListUsersService from '../../../services/ListUsersService';
import CreateUserService from '../../../services/CreateUserService';

const usersRoues = Router();

usersRoues.get('/', async (request: Request, response: Response) => {
  const listUsers = container.resolve(ListUsersService);
  const users = await listUsers.execute();
  return response.json(users);
});

usersRoues.post('/', async (request: Request, response: Response) => {
  const createUser = container.resolve(CreateUserService);
  const section = await createUser.execute(request.body);
  return response.json(section);
});

export default usersRoues;
