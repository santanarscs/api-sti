import { injectable, inject } from 'tsyringe';
import { IMovimentationsRepository } from '../repositories/IMovimentationsRepository';
import IMovimentation from '../models/IMovimentation';

interface IRequest {
  date: Date;
  equipament_id: string;
  section_id: string;
  user_id?: string;
}

@injectable()
export default class CreateMovimentationService {
  constructor(
    @inject('MovimentationsRepository')
    private movimentationsRepository: IMovimentationsRepository,
  ) {}

  public async execute(data: IRequest): Promise<IMovimentation> {
    const movimentation = await this.movimentationsRepository.create(data);
    return movimentation;
  }
}
