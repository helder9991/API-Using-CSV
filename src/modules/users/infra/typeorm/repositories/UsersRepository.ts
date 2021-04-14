import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';

import { IUsersRepository } from '../../repositories/IUsersRepository';
import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
    repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({ name, birthday, years_old }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            birthday,
            years_old,
        });

        this.repository.save(user);
    }

    async list(): Promise<User[]> {
        const users = this.repository.find();

        return users;
    }
}

export { UsersRepository };
