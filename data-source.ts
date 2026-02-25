import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { ServiceApi } from './src/service-api/service-api.entity';
import { VersionData } from './src/version-data/version-data.entity';

// Need to ensure env is read for migrations.
import * as dotenv from 'dotenv';
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.DB_NAME,

  entities: [ServiceApi, VersionData],

  migrations: ['src/migrations/*.ts'],

  logging: false,
});
