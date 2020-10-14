import { injectable, inject } from 'tsyringe';
import { IEquipamentsRepository } from '../repositories/IEquipamentsRepository';

@injectable()
export default class DeleteEquipamentService {
  constructor(
    @inject('EquipamentsRepository')
    private equipamentsService: IEquipamentsRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    await this.equipamentsService.delete(id);
  }
}
