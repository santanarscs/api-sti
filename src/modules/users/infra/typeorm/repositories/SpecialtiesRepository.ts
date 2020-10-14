import { getRepository, Repository } from 'typeorm';
import Specialty from '../entities/Specialty';
import ICreateSpecialtyDTO from '../../../dtos/ICreateSpecialtyDTO';
import { ISpecialtiesRepository } from '../../../repositories/ISpecialtiesRepository';

export default class SpecialtiesRepository implements ISpecialtiesRepository {
  private ormRepository: Repository<Specialty>;

  constructor() {
    this.ormRepository = getRepository(Specialty);
  }

  public async findById(id: string): Promise<Specialty | undefined> {
    const specialty = await this.ormRepository.findOne(id);
    return specialty;
  }

  public async list(): Promise<Specialty[]> {
    const specialties = await this.ormRepository.find();
    return specialties;
  }

  public async create(data: ICreateSpecialtyDTO): Promise<Specialty> {
    const specialty = this.ormRepository.create(data);

    await this.ormRepository.save(specialty);

    return specialty;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
