import { injectable, inject } from 'tsyringe';
import { ISectionsRepository } from '../repositories/ISectionsRepository';
import ISection from '../models/ISection';

@injectable()
export default class FindSectionService {
  constructor(
    @inject('SectionsRepository')
    private sectionsRepository: ISectionsRepository,
  ) {}

  public async execute(id: string): Promise<ISection | undefined> {
    const section = await this.sectionsRepository.findById(id);
    return section;
  }
}
