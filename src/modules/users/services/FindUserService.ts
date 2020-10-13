import { injectable, inject } from 'tsyringe';
import { IUsersRepository } from '../repositories/IUsersRepository';
import IUser from '../models/IUser';

@injectable()
export default class FindUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(id: string): Promise<IUser | undefined> {
    const user = await this.usersRepository.findById(id);
    return user;
  }
}
