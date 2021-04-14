import { Router } from 'express';
import multer from 'multer';

import { CreateUserCSVController } from '@modules/users/useCases/CreateUserCSVController';

const usersRoutes = Router();

const createUserCSVController = new CreateUserCSVController();

const upload = multer({
    dest: './tmp',
});

usersRoutes.post(
    '/create-csv',
    upload.single('file'),
    createUserCSVController.handle
);

export { usersRoutes };
