import { injectable, inject } from 'tsyringe';
import { ISpecialtiesRepository } from '../repositories/ISpecialtiesRepository';
import ISpecialty from '../models/ISpecialty';

@injectable()
export default class ListSpecialtiesService {
  constructor(
    @inject('SpecialtiesRepository')
    private specialtiesRepository: ISpecialtiesRepository,
  ) {}

  public async execute(): Promise<ISpecialty[]> {
    const specialties = await this.specialtiesRepository.list();
    return specialties;
  }
}
