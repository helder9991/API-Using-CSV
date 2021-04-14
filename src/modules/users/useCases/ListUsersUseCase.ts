import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '../infra/repositories/IUsersRepository';
import { User } from '../infra/typeorm/entities/User';

@injectable()
class ListUsersUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ) {}

    async execute(): Promise<User[] | undefined> {
        const users = await this.usersRepository.list();

        return users;
    }
}

export { ListUsersUseCase };
