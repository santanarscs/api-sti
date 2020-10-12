import { ObjectID } from 'mongodb';
import ISpecialty from './ISpecialty';

export default interface IUser {
  id: ObjectID;

  name: string;

  email: string;

  password: string;

  specialty: ISpecialty;

  created_at: Date;

  updated_at: Date;
}
