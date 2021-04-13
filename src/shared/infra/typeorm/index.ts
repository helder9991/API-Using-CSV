import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
    host: string;
    database: string;
}

export default getConnectionOptions().then(async (options) => {
    const newOptions = options as IOptions;

    switch (process.env.NODE_ENV) {
        case 'test':
            newOptions.host = 'localhost';
            newOptions.database = 'csv';
            break;
        default:
            newOptions.host = 'db';
            break;
    }

    return createConnection({
        ...options,
    });
});
