import 'reflect-metadata';
import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import path from 'path';
import cors from 'cors';
import routes from './routes';
import './database';
import './container';
import uploadConfig from './config/upload';
import AppError from './AppError';

const PORT = 3333;
const HOST = '0.0.0.0';
const app = express();

app.use(
  cors({
    exposedHeaders: ['x-total-count'],
  }),
);
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(routes);

app.get('/', (request, response) =>
  response.json({ message: 'Server online' }),
);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  // eslint-disable-next-line
  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(PORT, HOST, () => {
  console.log('⚡️⚡️⚡️The father is ON!!!');
});
