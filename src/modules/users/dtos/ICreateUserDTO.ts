export default interface ICreateUserDTO {
  name: string;

  email: string;

  password: string;

  specialty_id: string;

  graduation_id: string;

  board_id: string;

  section_id: string;

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
