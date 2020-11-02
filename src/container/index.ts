import { container } from 'tsyringe';

import './providers';
import '../modules/users/providers';
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
import { IEquipamentsRepository } from '../modules/equipaments/repositories/IEquipamentsRepository';
import EquipamentsRepository from '../modules/equipaments/infra/typeorm/repositories/EquipamentsRepository';
import { IMovimentationsRepository } from '../modules/equipaments/repositories/IMovimentationsRepository';
import MovimentationsRepository from '../modules/equipaments/infra/typeorm/repositories/MovimentationsRepository';
import { IOrdersRepository } from '../modules/orders/repositories/IOrdersRepository';
import OrdersRepository from '../modules/orders/infra/typeorm/repositories/OrdersRepository';
import { ITypesOrderRepository } from '../modules/orders/repositories/ITypesOrderRepository';
import TypesOrderRepository from '../modules/orders/infra/typeorm/repositories/TypesOrderRepository';
import { ISpotsRepository } from '../modules/appointments/repositories/ISpotsRepository';
import SpotsRepository from '../modules/appointments/infra/typeorm/repositories/SpotsRepository';

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

container.registerSingleton<IEquipamentsRepository>(
  'EquipamentsRepository',
  EquipamentsRepository,
);

container.registerSingleton<IOrdersRepository>(
  'OrdersRepository',
  OrdersRepository,
);

container.registerSingleton<ITypesOrderRepository>(
  'TypesOrderRepository',
  TypesOrderRepository,
);

container.registerSingleton<IMovimentationsRepository>(
  'MovimentationsRepository',
  MovimentationsRepository,
);

container.registerSingleton<ISpotsRepository>(
  'SpotsRepository',
  SpotsRepository,
);
