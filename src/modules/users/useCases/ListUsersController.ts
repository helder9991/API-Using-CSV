import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListUsersUseCase } from './ListUsersUseCase';

class ListUsersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listUsersUseCase = container.resolve(ListUsersUseCase);

        const users = await listUsersUseCase.execute();

        if (!users) return response.status(200).json([]);

        return response.status(200).json(users);
    }
}

export { ListUsersController };
