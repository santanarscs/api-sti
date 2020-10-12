import { createConnection } from 'typeorm';

createConnection({
  name: 'default',
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  database: 'subscriptions',
  useUnifiedTopology: true,
  entities: ['./src/modules/**/infra/typeorm/schemas/*.ts'],
});
