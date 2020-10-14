import { injectable, inject } from 'tsyringe';
import { IEquipamentsRepository } from '../repositories/IEquipamentsRepository';
import IEquipament from '../models/IEquipament';

interface IRequest {
  description: string;
  bpm: string;
  service_tag: string;
}

@injectable()
export default class CreateEquipamentService {
  constructor(
    @inject('EquipamentsRepository')
    private equipamentsRepository: IEquipamentsRepository,
  ) {}

  public async execute(data: IRequest): Promise<IEquipament> {
    const equipament = await this.equipamentsRepository.create(data);
    return equipament;
  }
}
