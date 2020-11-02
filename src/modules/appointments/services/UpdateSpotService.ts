import { inject, injectable } from 'tsyringe';
import { ISpotsRepository } from '../repositories/ISpotsRepository';
import ISpot from '../models/ISpot';
import AppError from '../../../AppError';

interface IRequest {
  id: string;
  name: string;
  description: string;
  places: number;
}

@injectable()
export default class UpdateSpotsService {
  constructor(
    @inject('SpotsRepository')
    private spotsRepository: ISpotsRepository,
  ) {}

  public async execute({
    id,
    name,
    description,
    places,
  }: IRequest): Promise<ISpot> {
    const spot = await this.spotsRepository.findById(id);

    if (!spot) {
      throw new AppError('Spot not found!');
    }

    spot.description = description;
    spot.name = name;
    spot.places = places;

    return this.spotsRepository.save(spot);
  }
}
