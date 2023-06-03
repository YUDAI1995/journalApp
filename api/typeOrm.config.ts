import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'journaldb',
  username: 'Admin',
  password: 'Password',
  entities: ['dist/**/entities/**/*.entity.js'],
  migrations: ['dist/**/migrations/**/*.js'],
  logging: true,

  synchronize: true,
});
