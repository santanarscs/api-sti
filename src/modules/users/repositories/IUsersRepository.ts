import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUser from '../models/IUser';

interface IFindUsers {
  page: number;
  limit: number;
  queryName?: string;
}

export interface IUsersRepository {
  findById(id: string): Promise<IUser | undefined>;
  findByEmail(email: string): Promise<IUser | undefined>;
  create(data: ICreateUserDTO): Promise<IUser>;
  list(data: IFindUsers): Promise<[IUser[], number]>;
  delete(id: string): Promise<void>;
}
