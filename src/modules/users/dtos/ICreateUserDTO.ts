import ISpecialty from '../models/ISpecialty';

export default interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  specialty: ISpecialty;
}
