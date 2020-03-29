import { Sequelize } from 'sequelize';

import { DbConfig } from '../config';
import { Counter } from './counter';
import { Database } from '../../@types';

const env = process.env.NODE_ENV || 'dev';

const connection = new Sequelize({
  dialect: DbConfig[env].dialect,
  dialectModulePath: DbConfig[env].dialectModulePath,
  storage: DbConfig[env].storage,
  password: DbConfig[env].password
});

Counter.initModel(connection);

const models = {
  Counter
};

export const db: Database = { connection, models };
