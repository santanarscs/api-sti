import { injectable, inject } from 'tsyringe';
import { ISpotsRepository } from '../repositories/ISpotsRepository';
import ISpot from '../models/ISpot';
import ICreateSpotDTO from '../dtos/ICreateSpotDTO';

@injectable()
export default class CreateSpotService {
  constructor(
    @inject('SpotsRepository')
    private spotsRepository: ISpotsRepository,
  ) {}

  public async execute(data: ICreateSpotDTO): Promise<ISpot> {
    const spot = await this.spotsRepository.create(data);
    return spot;
  }
}
