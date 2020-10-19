import { injectable, inject } from 'tsyringe';
import { IUsersRepository } from '../repositories/IUsersRepository';
import IUser from '../models/IUser';

interface IRequest {
  page: number;
  limit: number;
  queryName?: string;
}

@injectable()
export default class ListUsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    page,
    limit,
    queryName,
  }: IRequest): Promise<[IUser[], number]> {
    const users = await this.usersRepository.list({
      page,
      limit,
      queryName,
    });
    return users;
  }
}
