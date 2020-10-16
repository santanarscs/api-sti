import { injectable, inject } from 'tsyringe';
import { IEquipamentsRepository } from '../repositories/IEquipamentsRepository';
import IEquipament from '../models/IEquipament';

interface IRequest {
  page: number;
  limit: number;
}

@injectable()
export default class ListEquipamentsService {
  constructor(
    @inject('EquipamentsRepository')
    private equipamentsRepository: IEquipamentsRepository,
  ) {}

  public async execute({
    page,
    limit,
  }: IRequest): Promise<[IEquipament[], number]> {
    const equipaments = await this.equipamentsRepository.list({ page, limit });

    return equipaments;
  }
}
