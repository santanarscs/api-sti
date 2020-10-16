import 'reflect-metadata';
import express from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes';
import './database';
import './container';

const PORT = 3333;
const HOST = '0.0.0.0';
const app = express();

app.use(
  cors({
    exposedHeaders: ['x-total-count'],
  }),
);
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(routes);

app.get('/', (request, response) =>
  response.json({ message: 'Server online' }),
);

app.listen(PORT, HOST, () => {
  console.log('⚡️⚡️⚡️The father is ON!!!');
});
