import { injectable, inject } from 'tsyringe';
import { hash } from 'bcryptjs';
import { IUsersRepository } from '../repositories/IUsersRepository';
import IUser from '../models/IUser';
import AppError from '../../../AppError';
import { ISpecialtiesRepository } from '../repositories/ISpecialtiesRepository';
import { IGraduationsRepository } from '../repositories/IGraduationsRepository';
import { IBoardsRepository } from '../repositories/IBoardsRepository';
import { ISectionsRepository } from '../../sections/repositories/ISectionsRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
  specialty_id: string;
  board_id: string;
  graduation_id: string;
  section_id: string;
  saram: string;
  full_name: string;
  situation: string;
  phone: string;
  birthday: Date;
  last_promotion: Date;
  sequence: string;
  provider: boolean;
  avatar?: string;
}

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('SpecialtiesRepository')
    private specialtiesRepository: ISpecialtiesRepository,

    @inject('GraduationsRepository')
    private graduationsRepository: IGraduationsRepository,

    @inject('BoardsRepository')
    private boardsRepository: IBoardsRepository,

    @inject('SectionsRepository')
    private sectionsRepository: ISectionsRepository,
  ) {}

  public async execute({
    name,
    email,
    password,
    specialty_id,
    board_id,
    graduation_id,
    section_id,
    saram,
    full_name,
    situation,
    phone,
    birthday,
    last_promotion,
    sequence,
    provider,
  }: IRequest): Promise<IUser> {
    const checkUserEmail = await this.usersRepository.findByEmail(email);
    if (checkUserEmail) {
      throw new AppError('Email address already used.');
    }
    const specialty = await this.specialtiesRepository.findById(specialty_id);

    if (!specialty) {
      throw new AppError('Specialty not found.');
    }

    const section = await this.sectionsRepository.findById(section_id);

    if (!section) {
      throw new AppError('Section not found.');
    }

    const board = await this.boardsRepository.findById(board_id);

    if (!board) {
      throw new AppError('Board not found.');
    }

    const graduation = await this.graduationsRepository.findById(graduation_id);

    if (!graduation) {
      throw new AppError('Graduation not found.');
    }

    const hashedPassword = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      specialty,
      graduation,
      board,
      section,
      saram,
      full_name,
      situation,
      phone,
      birthday,
      last_promotion,
      sequence,
      provider,
    });
    return user;
  }
}
