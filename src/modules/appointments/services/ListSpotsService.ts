import { injectable, inject } from 'tsyringe';
import { ISpotsRepository } from '../repositories/ISpotsRepository';
import ISpot from '../models/ISpot';

interface IRequest {
  page?: number;
  limit?: number;
  queryName?: string;
}

@injectable()
export default class ListSpotsService {
  constructor(
    @inject('SpotsRepository')
    private spotsRepository: ISpotsRepository,
  ) {}

  public async execute({
    page,
    limit,
    queryName,
  }: IRequest): Promise<[ISpot[], number]> {
    const spots = await this.spotsRepository.list({
      page,
      limit,
      queryName,
    });
    return spots;
  }
}
