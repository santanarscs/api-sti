import { injectable, inject } from 'tsyringe';
import { ISpotsRepository } from '../repositories/ISpotsRepository';

@injectable()
export default class DeleteSpotService {
  constructor(
    @inject('SpotsRepository')
    private spotsRepository: ISpotsRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    await this.spotsRepository.delete(id);
  }
}
