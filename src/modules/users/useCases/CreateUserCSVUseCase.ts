import csvParse from 'csv-parse';
import fs from 'fs';
import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '../infra/repositories/IUsersRepository';

interface ICreateUserCSV {
    name: string;
    birthday: Date;
    years_old: number;
}

@injectable()
class CreateUserCSVUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ) {}

    loadFile(file: Express.Multer.File): Promise<ICreateUserCSV[]> {
        return new Promise((resolve, reject) => {
            const users: ICreateUserCSV[] = [];
            const stream = fs.createReadStream(file.path);
            const parseFile = csvParse();
            stream.pipe(parseFile);
            parseFile
                .on('data', async (line) => {
                    const [birthday, years_old, name] = line;
                    users.push({ name, birthday, years_old });
                })
                .on('end', () => {
                    fs.promises.unlink(file.path);
                    resolve(users);
                })
                .on('error', (err) => reject(err));
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const users = await this.loadFile(file);

        users.forEach(async (user) => {
            const { name, birthday, years_old } = user;
            await this.usersRepository.create({ name, birthday, years_old });
        });
    }
}

export { CreateUserCSVUseCase };
