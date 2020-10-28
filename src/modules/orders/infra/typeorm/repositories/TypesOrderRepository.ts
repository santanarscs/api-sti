import { getRepository, Repository } from 'typeorm';
import TypeOrder from '../entities/TypeOrder';
import ICreateTypeOrderDTO from '../../../dtos/ICreateTypeOrderDTO';
import { ITypesOrderRepository } from '../../../repositories/ITypesOrderRepository';

export default class TypesOrderRepository implements ITypesOrderRepository {
  private ormRepository: Repository<TypeOrder>;

  constructor() {
    this.ormRepository = getRepository(TypeOrder);
  }

  public async findById(id: string): Promise<TypeOrder | undefined> {
    const type = await this.ormRepository.findOne(id);
    return type;
  }

  public async list({
    page,
    limit,
    queryName,
  }: {
    page?: number;
    limit?: number;
    queryName?: string | undefined;
  }): Promise<[TypeOrder[], number]> {
    const query = this.ormRepository.createQueryBuilder('types_orders');

    if (page && limit) {
      query.skip((page - 1) * limit).take(limit);
    }

    if (queryName) {
      query.where('name ILIKE :name', {
        name: `%${queryName}%`,
      });
    }
    const types = await query.getManyAndCount();

    return types;
  }

  public async create(data: ICreateTypeOrderDTO): Promise<TypeOrder> {
    const type = this.ormRepository.create(data);

    await this.ormRepository.save(type);

    return type;
  }

  public async save(type: TypeOrder): Promise<TypeOrder> {
    return this.ormRepository.save(type);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
