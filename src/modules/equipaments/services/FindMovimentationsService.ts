import { injectable, inject } from 'tsyringe';
import { IMovimentationsRepository } from '../repositories/IMovimentationsRepository';
import IMovimentation from '../models/IMovimentation';

@injectable()
export default class FindMovimentationsService {
  constructor(
    @inject('MovimentationsRepository')
    private movimentationsRepository: IMovimentationsRepository,
  ) {}

  public async execute(equipament_id: string): Promise<IMovimentation[]> {
    const movimentations = await this.movimentationsRepository.findByEquipamentId(
      equipament_id,
    );
    return movimentations;
  }
}
