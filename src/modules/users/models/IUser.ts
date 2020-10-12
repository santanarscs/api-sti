import { ObjectID } from 'mongodb';
import ISpecialty from './ISpecialty';
import IGraduation from './IGraduation';
import IBoard from './IBoard';
import ISection from '../../sections/models/ISection';

export default interface IUser {
  id: ObjectID;

  name: string;

  email: string;

  password: string;

  specialty: ISpecialty;

  graduation: IGraduation;

  board: IBoard;

  section: ISection;

  avatar: string;

  saram: string;

  full_name: string;

  situation: string;

  phone: string;

  birthday: Date;

  last_promotion: Date;

  sequence: string;

  provider: boolean;

  created_at: Date;

  updated_at: Date;
}
