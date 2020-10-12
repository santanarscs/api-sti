import { injectable, inject } from 'tsyringe';
import { IGraduationsRepository } from '../repositories/IGraduationsRepository';
import IGraduation from '../models/IGraduation';

@injectable()
export default class ListGraduationsService {
  constructor(
    @inject('GraduationsRepository')
    private graduationsRepository: IGraduationsRepository,
  ) {}

  public async execute(): Promise<IGraduation[]> {
    const graduations = await this.graduationsRepository.list();
    return graduations;
  }
}
