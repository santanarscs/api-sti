import { injectable, inject } from 'tsyringe';
import { IGraduationsRepository } from '../repositories/IGraduationsRepository';
import IGraduation from '../models/IGraduation';
import ICreateGraduationDTO from '../dtos/ICreateGraduationDTO';

@injectable()
export default class CreateGraduationService {
  constructor(
    @inject('GraduationsRepository')
    private graduationsRepository: IGraduationsRepository,
  ) {}

  public async execute(data: ICreateGraduationDTO): Promise<IGraduation> {
    const graduation = await this.graduationsRepository.create(data);
    return graduation;
  }
}
