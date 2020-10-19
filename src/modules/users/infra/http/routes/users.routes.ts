import { Router, Request, Response } from 'express';
import { container } from 'tsyringe';
import multer from 'multer';
import ListUsersService from '../../../services/ListUsersService';
import CreateUserService from '../../../services/CreateUserService';
import FindUserService from '../../../services/FindUserService';
import DeleteUserService from '../../../services/DeleteUserService';

import uploadConfig from '../../../../../config/upload';

const usersRoues = Router();
const upload = multer(uploadConfig);

usersRoues.get('/', async (request: Request, response: Response) => {
  const { page, limit, queryName } = request.query;
  const listUsers = container.resolve(ListUsersService);
  const [users, total] = await listUsers.execute({
    page: Number(page),
    limit: Number(limit),
    queryName: queryName ? String(queryName) : undefined,
  });
  response.header('x-total-count', String(total));
  return response.json(users);
});

usersRoues.get('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;
  const findUser = container.resolve(FindUserService);
  const user = await findUser.execute(id);
  return response.json(user);
});

usersRoues.post(
  '/',
  upload.single('avatar'),
  async (request: Request, response: Response) => {
    try {
      const { filename } = request.file;
      const createUser = container.resolve(CreateUserService);
      const user = await createUser.execute({ ...request.body, filename });
      return response.json(user);
    } catch (e) {
      return response.status(400).json(e);
    }
  },
);

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
