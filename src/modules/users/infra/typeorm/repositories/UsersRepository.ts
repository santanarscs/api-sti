import { getRepository, Repository } from 'typeorm';
import User from '../entities/User';
import ICreateUserDTO from '../../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../../repositories/IUsersRepository';

export default class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);
    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { email } });
    return user;
  }

  public async list({
    page,
    limit,
    queryName,
  }: {
    page: number;
    limit: number;
    queryName?: string | undefined;
  }): Promise<[User[], number]> {
    const query = this.ormRepository.createQueryBuilder('users');

    if (page && limit) {
      query.skip(Number((page - 1) * limit)).take(limit);
    }

    if (queryName) {
      query
        .where('name ILIKE :name', {
          name: `%${queryName}%`,
        })
        .orWhere('email ILIKE :email', { email: `%${queryName}%` });
    }

    const users = await query.getManyAndCount();
    return users;
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(data);

    await this.ormRepository.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
