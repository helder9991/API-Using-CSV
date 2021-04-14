import { Router } from 'express';
import multer from 'multer';

import { CreateUserCSVController } from '@modules/users/useCases/CreateUserCSVController';
import { ListUsersController } from '@modules/users/useCases/ListUsersController';

const usersRoutes = Router();

const createUserCSVController = new CreateUserCSVController();
const listUsersController = new ListUsersController();

const upload = multer({
    dest: './tmp',
});

usersRoutes.post(
    '/create-csv',
    upload.single('file'),
    createUserCSVController.handle
);

usersRoutes.get('/list', listUsersController.handle);

export { usersRoutes };
