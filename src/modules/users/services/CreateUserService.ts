import { injectable, inject } from 'tsyringe';
import { hash } from 'bcryptjs';
import { IUsersRepository } from '../repositories/IUsersRepository';
import IUser from '../models/IUser';
import AppError from '../../../AppError';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ name, email, password }: IRequest): Promise<IUser> {
    const checkUserEmail = await this.usersRepository.findByEmail(email);
    if (checkUserEmail) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });
    return user;
  }
}
