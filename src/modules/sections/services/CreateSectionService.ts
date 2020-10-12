import { injectable, inject } from 'tsyringe';
import { ISectionsRepository } from '../repositories/ISectionsRepository';
import ISection from '../models/ISection';
import ICreateSectionDTO from '../dtos/ICreateSectionDTO';

@injectable()
export default class CreateSectionService {
  constructor(
    @inject('SectionsRepository')
    private sectionsRepository: ISectionsRepository,
  ) {}

  public async execute(data: ICreateSectionDTO): Promise<ISection> {
    const section = await this.sectionsRepository.create(data);
    return section;
  }
}
