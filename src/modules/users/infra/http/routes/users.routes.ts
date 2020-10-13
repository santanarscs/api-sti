import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import ListUsersService from '../../../services/ListUsersService';
import CreateUserService from '../../../services/CreateUserService';
import FindUserService from '../../../services/FindUserService';
import DeleteUserService from '../../../services/DeleteUserService';

const usersRoues = Router();

usersRoues.get('/', async (request: Request, response: Response) => {
  const listUsers = container.resolve(ListUsersService);
  const users = await listUsers.execute();
  return response.json(users);
});

usersRoues.get('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;
  const findUser = container.resolve(FindUserService);
  const user = await findUser.execute(id);
  return response.json(user);
});

usersRoues.post('/', async (request: Request, response: Response) => {
  try {
    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute(request.body);
    return response.json(user);
  } catch (e) {
    return response.status(400).json(e);
  }
});

usersRoues.delete('/:id', async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const deleteUser = container.resolve(DeleteUserService);
    await deleteUser.execute(id);
    return response.status(204).send();
  } catch (e) {
    return response.status(400).json(e);
  }
});

export default usersRoues;
