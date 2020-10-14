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

  public async list(): Promise<Equipament[]> {
    const sections = await this.ormRepository.find();
    return sections;
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
