import { inject, injectable } from 'tsyringe';
import { IEquipamentsRepository } from '../repositories/IEquipamentsRepository';
import IEquipament from '../models/IEquipament';
import AppError from '../../../AppError';

interface IRequest {
  id: string;
  description: string;
  bpm: string;
  service_tag: string;
}

@injectable()
export default class UpdateEquipamentService {
  constructor(
    @inject('EquipamentsRepository')
    private equipamentsRepository: IEquipamentsRepository,
  ) {}

  public async execute({
    id,
    description,
    bpm,
    service_tag,
  }: IRequest): Promise<IEquipament> {
    const equipament = await this.equipamentsRepository.findById(id);

    if (!equipament) {
      throw new AppError('Equipament not found!');
    }

    equipament.description = description;
    equipament.bpm = bpm;
    equipament.service_tag = service_tag;

    return this.equipamentsRepository.save(equipament);
  }
}
