import { getMongoRepository, MongoRepository } from 'typeorm';
import Graduation from '../schemas/Graduation';
import ICreateGraduationDTO from '../../../dtos/ICreateGraduationDTO';
import { IGraduationsRepository } from '../../../repositories/IGraduationsRepository';

export default class GraduationsRepository implements IGraduationsRepository {
  private ormRepository: MongoRepository<Graduation>;

  constructor() {
    this.ormRepository = getMongoRepository(Graduation);
  }

  public async findById(id: string): Promise<Graduation | undefined> {
    const graduation = await this.ormRepository.findOne(id);
    return graduation;
  }

  public async list(): Promise<Graduation[]> {
    const graduations = await this.ormRepository.find();
    return graduations;
  }

  public async create(data: ICreateGraduationDTO): Promise<Graduation> {
    const graduation = this.ormRepository.create(data);

    await this.ormRepository.save(graduation);

    return graduation;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
