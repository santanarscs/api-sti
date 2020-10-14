import { injectable, inject } from 'tsyringe';
import { IEquipamentsRepository } from '../repositories/IEquipamentsRepository';
import IEquipament from '../models/IEquipament';

@injectable()
export default class FindEquipamentService {
  constructor(
    @inject('EquipamentsRepository')
    private equipamentsRepository: IEquipamentsRepository,
  ) {}

  public async execute(id: string): Promise<IEquipament | undefined> {
    const equipament = await this.equipamentsRepository.findById(id);
    return equipament;
  }
}
