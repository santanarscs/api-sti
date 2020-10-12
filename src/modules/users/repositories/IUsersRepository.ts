import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUser from '../models/IUser';

export interface IUsersRepository {
  findById(id: string): Promise<IUser | undefined>;
  findByEmail(email: string): Promise<IUser | undefined>;
  create(data: ICreateUserDTO): Promise<IUser>;
  list(): Promise<IUser[]>;
  delete(id: string): Promise<void>;
}
