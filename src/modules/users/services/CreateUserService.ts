import { injectable, inject } from 'tsyringe';
import { hash } from 'bcryptjs';
import { IUsersRepository } from '../repositories/IUsersRepository';
import IUser from '../models/IUser';
import AppError from '../../../AppError';
import { ISpecialtiesRepository } from '../repositories/ISpecialtiesRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
  specialty_id: string;
}

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('SpecialtiesRepository')
    private specialtiesRepository: ISpecialtiesRepository,
  ) {}

  public async execute({
    name,
    email,
    password,
    specialty_id,
  }: IRequest): Promise<IUser> {
    const checkUserEmail = await this.usersRepository.findByEmail(email);
    if (checkUserEmail) {
      throw new AppError('Email address already used.');
    }
    const specialty = await this.specialtiesRepository.findById(specialty_id);

    if (!specialty) {
      throw new AppError('Specialty not found.');
    }

    const hashedPassword = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      specialty,
    });
    return user;
  }
}
