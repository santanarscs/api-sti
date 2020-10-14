import { getRepository, Repository } from 'typeorm';
import Section from '../entities/Section';
import ICreateSectionDTO from '../../../dtos/ICreateSectionDTO';
import { ISectionsRepository } from '../../../repositories/ISectionsRepository';

export default class SectionsRepository implements ISectionsRepository {
  private ormRepository: Repository<Section>;

  constructor() {
    this.ormRepository = getRepository(Section);
  }

  public async findById(id: string): Promise<Section | undefined> {
    const section = await this.ormRepository.findOne(id);
    return section;
  }

  public async list(): Promise<Section[]> {
    const sections = await this.ormRepository.find();
    return sections;
  }

  public async create(data: ICreateSectionDTO): Promise<Section> {
    const section = this.ormRepository.create(data);

    await this.ormRepository.save(section);

    return section;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
