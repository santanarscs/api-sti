import { getRepository, Repository } from 'typeorm';
import { IMovimentationsRepository } from '../../../repositories/IMovimentationsRepository';
import Movimentation from '../entities/Movimentation';
import ICreateMovimentationDTO from '../../../dtos/ICreateMovimentationDTO';

export default class MovimentationsRepository
  implements IMovimentationsRepository {
  private ormRepository: Repository<Movimentation>;

  constructor() {
    this.ormRepository = getRepository(Movimentation);
  }

  public async create(data: ICreateMovimentationDTO): Promise<Movimentation> {
    const movimentation = this.ormRepository.create(data);

    await this.ormRepository.save(movimentation);

    return movimentation;
  }

  public async findByEquipamentId(
    equipament_id: string,
  ): Promise<Movimentation[]> {
    const movimentations = await this.ormRepository.find({
      where: { equipament_id },
    });
    return movimentations;
  }
}
