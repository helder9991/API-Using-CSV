import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserCSVUseCase } from './CreateUserCSVUseCase';

class CreateUserCSVController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;
        const createUserCSVUseCase = container.resolve(CreateUserCSVUseCase);

        await createUserCSVUseCase.execute(file);

        return response.status(201).send();
    }
}

export { CreateUserCSVController };
