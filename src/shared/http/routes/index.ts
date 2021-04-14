import { Router } from 'express';

const routes = Router();

routes.post('/', (request, response) => {
    return response.status(201).send();
});

routes.get('/', (request, response) => {
    return response.status(200).json();
});

export { routes };
