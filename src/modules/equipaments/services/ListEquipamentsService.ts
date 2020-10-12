import { injectable, inject } from 'tsyringe';
import { IEquipamentsRepository } from '../repositories/IEquipamentsRepository';
import IEquipament from '../models/IEquipament';

@injectable()
export default class ListEquipamentsService {
  constructor(
    @inject('EquipamentsRepository')
    private equipamentsRepository: IEquipamentsRepository,
  ) {}

  public async execute(): Promise<IEquipament[]> {
    const equipaments = await this.equipamentsRepository.list();
    return equipaments;
  }
}
