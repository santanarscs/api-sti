import { injectable, inject } from 'tsyringe';
import { ITypesOrderRepository } from '../repositories/ITypesOrderRepository';
import ITypeOrder from '../models/ITypeOrder';

interface IRequest {
  name: string;
  color: string;
}

@injectable()
export default class CreateTypeOrderService {
  constructor(
    @inject('TypesOrderRepository')
    private typesOrderRepository: ITypesOrderRepository,
  ) {}

  public async execute(data: IRequest): Promise<ITypeOrder> {
    const type = await this.typesOrderRepository.create(data);
    return type;
  }
}
