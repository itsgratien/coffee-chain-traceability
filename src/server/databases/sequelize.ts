import dotenv from 'dotenv';
dotenv.config();
import { Farmer } from './models/farmer.model';
import { FarmerLog } from './models/farmerLog.model';
import { Stock } from './models/stock.model';
import { Batch } from './models/batches.model';
import { Sequelize } from 'sequelize-typescript';

const dbUrl = process.env.DATABASE_URL as string;

export const sequelize = new Sequelize(dbUrl, {
  models: [Farmer, FarmerLog, Stock, Batch],
  sync: { force: false },
  dialect: 'postgres',
  logging: false,
  repositoryMode: true,
});
