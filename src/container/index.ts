import { container } from 'tsyringe';

import { ISectionsRepository } from '../modules/sections/repositories/ISectionsRepository';
import SectionsRepository from '../modules/sections/infra/typeorm/repositories/SectionsRepository';

import { IBoardsRepository } from '../modules/users/repositories/IBoardsRepository';
import BoardsRepository from '../modules/users/infra/typeorm/repositories/BoardsRepository';
import { IUsersRepository } from '../modules/users/repositories/IUsersRepository';
import UsersRepository from '../modules/users/infra/typeorm/repositories/UsersRepository';
import { IGraduationsRepository } from '../modules/users/repositories/IGraduationsRepository';
import GraduationsRepository from '../modules/users/infra/typeorm/repositories/GraduationsRepository';
import { ISpecialtiesRepository } from '../modules/users/repositories/ISpecialtiesRepository';
import SpecialtiesRepository from '../modules/users/infra/typeorm/repositories/SpecialtiesRepository';

container.registerSingleton<ISectionsRepository>(
  'SectionsRepository',
  SectionsRepository,
);

container.registerSingleton<IGraduationsRepository>(
  'GraduationsRepository',
  GraduationsRepository,
);

container.registerSingleton<ISpecialtiesRepository>(
  'SpecialtiesRepository',
  SpecialtiesRepository,
);

container.registerSingleton<IBoardsRepository>(
  'BoardsRepository',
  BoardsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
