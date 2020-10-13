import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import './database';
import './container';

const PORT = 3333;
const HOST = '0.0.0.0';
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (request, response) =>
  response.json({ message: 'Server online' }),
);

app.listen(PORT, HOST, () => {
  console.log('⚡️⚡️⚡️The father is ON!!!');
});
