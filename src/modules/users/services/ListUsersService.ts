import { injectable, inject } from 'tsyringe';
import { IUsersRepository } from '../repositories/IUsersRepository';
import IUser from '../models/IUser';

@injectable()
export default class ListUsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(): Promise<IUser[]> {
    const users = await this.usersRepository.list();
    return users;
  }
}
