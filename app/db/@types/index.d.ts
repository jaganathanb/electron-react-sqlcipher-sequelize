import { Sequelize } from 'sequelize/types';
import { Counter } from '../models/counter';

interface Database {
  connection: Sequelize;
  models: Models;
}

type Models = {
  Counter: typeof Counter;
};
