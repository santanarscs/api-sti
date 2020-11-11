import { injectable, inject } from 'tsyringe';
import { IEquipamentsRepository } from '../repositories/IEquipamentsRepository';
import IEquipament from '../models/IEquipament';
import AppError from '../../../AppError';

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

  public async execute({description, bpm, service_tag}: IRequest): Promise<IEquipament> {

    if(bpm) {
      const equipament = await this.equipamentsRepository.findByBpm(bpm)
      if(equipament) {
        throw new AppError('BPM already used.');
      }
    }

    const equipament = await this.equipamentsRepository.create({
      description,
      bpm: bpm ? bpm : undefined,
      service_tag
    });
    return equipament;
  }
}
