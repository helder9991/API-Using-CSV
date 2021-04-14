import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import swaggerUI from 'swagger-ui-express';

import handleErrors from './middlewares/handleErrors';
import { routes } from './routes';
import swaggerFile from './swagger.json';
import '../typeorm';
import '../../container';

const app = express();

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(express.json());

app.use(routes);
app.use(handleErrors);

app.listen(3333, () => console.log('Backend Started'));
