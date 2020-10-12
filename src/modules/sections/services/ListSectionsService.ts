import { injectable, inject } from 'tsyringe';
import { ISectionsRepository } from '../repositories/ISectionsRepository';
import ISection from '../models/ISection';

@injectable()
export default class ListSectionsService {
  constructor(
    @inject('SectionsRepository')
    private sectionsRepository: ISectionsRepository,
  ) {}

  public async execute(): Promise<ISection[]> {
    const sections = await this.sectionsRepository.list();
    return sections;
  }
}
