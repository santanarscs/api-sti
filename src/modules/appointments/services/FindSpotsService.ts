import { injectable, inject } from 'tsyringe';
import { ISpotsRepository } from '../repositories/ISpotsRepository';
import ISpot from '../models/ISpot';

@injectable()
export default class FindSpotService {
  constructor(
    @inject('SpotsRepository')
    private spotsRepository: ISpotsRepository,
  ) {}

  public async execute(id: string): Promise<ISpot | undefined> {
    const spot = await this.spotsRepository.findById(id);
    return spot;
  }
}
