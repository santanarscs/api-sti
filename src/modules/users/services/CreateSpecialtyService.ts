import { injectable, inject } from 'tsyringe';
import { ISpecialtiesRepository } from '../repositories/ISpecialtiesRepository';
import ISpecialty from '../models/ISpecialty';
import ICreateSpecialtyDTO from '../dtos/ICreateSpecialtyDTO';

@injectable()
export default class CreateSpecialtyService {
  constructor(
    @inject('SpecialtiesRepository')
    private specialtiesRepository: ISpecialtiesRepository,
  ) {}

  public async execute(data: ICreateSpecialtyDTO): Promise<ISpecialty> {
    const specialty = await this.specialtiesRepository.create(data);
    return specialty;
  }
}
