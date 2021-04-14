import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../typeorm/entities/User';

interface IUsersRepository {
    list(): Promise<User[] | undefined>;
    create(data: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository };
