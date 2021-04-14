import { container } from 'tsyringe';

import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton('UsersRepository', UsersRepository);
