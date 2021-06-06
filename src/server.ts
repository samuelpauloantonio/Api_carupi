import { config } from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import Routes from './routes';
import { connection } from './database';
import AppError from './erros/AppError';

config();

(async () => {
    await connection();
})();

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(Routes);

server.use(
    (err: Error, resquest: Request, response: Response, _: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                status: 'error',
                message: err.message,
            });
        }
        return response.status(500).json({
            status: { error: 'error', err },
            message: 'Internal server Error',
        });
    },
);

server.listen('3333', () => {
    console.log('🚀 server is runnig');
});
