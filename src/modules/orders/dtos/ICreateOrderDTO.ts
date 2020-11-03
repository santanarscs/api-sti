import ITypeOrder from '../models/ITypeOrder';

export default interface ICreateOrderDTO {
  description: string;

  owner: string;

  type: ITypeOrder;

  status: string;
}
