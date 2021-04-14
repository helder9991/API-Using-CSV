import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO';
import { User } from '../../typeorm/entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepositoryInMemory implements IUsersRepository {
    users: User[] = [];
    async create({ birthday, name, years_old }: ICreateUserDTO): Promise<void> {
        const user = new User();

        Object.assign(user, {
            name,
            years_old,
            birthday,
        });

        this.users.push(user);
    }

    async list(): Promise<User[]> {
        return this.users;
    }
}

export { UsersRepositoryInMemory };
