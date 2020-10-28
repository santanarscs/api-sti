import { injectable, inject } from 'tsyringe';
import { ITypesOrderRepository } from '../repositories/ITypesOrderRepository';
import ITypeOrder from '../models/ITypeOrder';

interface IRequest {
  page?: number;
  limit?: number;
  queryName?: string;
}

@injectable()
export default class ListTypesOrderService {
  constructor(
    @inject('TypesOrderRepository')
    private typesOrderRepository: ITypesOrderRepository,
  ) {}

  public async execute({
    page,
    limit,
    queryName,
  }: IRequest): Promise<[ITypeOrder[], number]> {
    const types = await this.typesOrderRepository.list({
      page,
      limit,
      queryName,
    });

    return types;
  }
}
