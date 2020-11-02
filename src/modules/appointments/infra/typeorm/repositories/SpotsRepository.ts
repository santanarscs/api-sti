import { getRepository, Repository } from 'typeorm';
import Spot from '../entities/Spot';
import ICreateSpotDTO from '../../../dtos/ICreateSpotDTO';
import { ISpotsRepository } from '../../../repositories/ISpotsRepository';

export default class SpotsRepository implements ISpotsRepository {
  private ormRepository: Repository<Spot>;

  constructor() {
    this.ormRepository = getRepository(Spot);
  }

  public async findById(id: string): Promise<Spot | undefined> {
    const spot = await this.ormRepository.findOne(id);
    return spot;
  }

  public async list({
    page,
    limit,
    queryName,
  }: {
    page: number;
    limit: number;
    queryName?: string | undefined;
  }): Promise<[Spot[], number]> {
    const query = this.ormRepository.createQueryBuilder('spots');

    if (page && limit) {
      query.skip(Number((page - 1) * limit)).take(limit);
    }

    if (queryName) {
      query
        .where('name ILIKE :name', {
          name: `%${queryName}%`,
        })
        .orWhere('description ILIKE :description', {
          description: `%${queryName}%`,
        });
    }

    const spots = await query.getManyAndCount();
    return spots;
  }

  public async create(data: ICreateSpotDTO): Promise<Spot> {
    const spot = this.ormRepository.create(data);

    await this.ormRepository.save(spot);

    return spot;
  }

  public async save(spot: Spot): Promise<Spot> {
    return this.ormRepository.save(spot);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
