import { getRepository, Repository } from 'typeorm';
import { IEquipamentsRepository } from '../../../repositories/IEquipamentsRepository';
import Equipament from '../entities/Equipament';
import ICreateEquipamentDTO from '../../../dtos/ICreateEquipamentDTO';

export default class EquipamentsRepository implements IEquipamentsRepository {
  private ormRepository: Repository<Equipament>;

  constructor() {
    this.ormRepository = getRepository(Equipament);
  }

  public async findById(id: string): Promise<Equipament | undefined> {
    const equipament = await this.ormRepository.findOne(id);
    return equipament;
  }

  public async findByBpm(bpm: string): Promise<Equipament | undefined> {
    const equipament = await this.ormRepository.findOne({where: {bpm}})
    return equipament;
  }

  public async list({
    page,
    limit,
    queryName,
  }: {
    page: number;
    limit: number;
    queryName?: string | undefined;
  }): Promise<[Equipament[], number]> {
    const query = this.ormRepository
      .createQueryBuilder('equipaments')
      .skip((page - 1) * limit)
      .take(limit);

    if (queryName) {
      query
        .where('description ILIKE :description', {
          description: `%${queryName}%`,
        })
        .orWhere('bpm ILIKE :bpm', { bpm: `%${queryName}%` })
        .orWhere('service_tag ILIKE :service_tag', {
          service_tag: `%${queryName}%`,
        });
    }
    const equipaments = await query.getManyAndCount();

    return equipaments;
  }

  public async create(data: ICreateEquipamentDTO): Promise<Equipament> {
    const equipament = this.ormRepository.create(data);

    await this.ormRepository.save(equipament);

    return equipament;
  }

  public async save(equipament: Equipament): Promise<Equipament> {
    return this.ormRepository.save(equipament);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
