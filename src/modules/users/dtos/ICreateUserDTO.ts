import ISpecialty from '../models/ISpecialty';
import IGraduation from '../models/IGraduation';
import IBoard from '../models/IBoard';
import ISection from '../../sections/models/ISection';

export default interface ICreateUserDTO {
  name: string;

  email: string;

  password: string;

  specialty: ISpecialty;

  graduation: IGraduation;

  board: IBoard;

  section: ISection;

  avatar?: string;

  saram: string;

  full_name: string;

  situation: string;

  phone: string;

  birthday: Date;

  last_promotion: Date;

  sequence: string;

  provider: boolean;
}
