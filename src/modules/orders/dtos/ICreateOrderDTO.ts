import ITypeOrder from '../models/ITypeOrder';

export default interface ICreateOrderDTO {
  description: string;

  user: string;

  type: ITypeOrder;

  status: string;
}
