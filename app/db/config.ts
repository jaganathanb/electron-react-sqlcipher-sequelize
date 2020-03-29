import path from 'path';
import { homedir, userInfo } from 'os';
import { Options } from 'sequelize';

type EnvSqliteOptions = {
  [key: string]: Options;
};

export const DbConfig: EnvSqliteOptions = {
  development: {
    password: userInfo().username,
    dialect: 'sqlite',
    dialectModulePath: '@journeyapps/sqlcipher',
    storage: path.join(homedir(), 'dev.sqlite')
  },
  test: {
    password: userInfo().username,
    dialect: 'sqlite',
    dialectModulePath: '@journeyapps/sqlcipher',
    storage: path.join(homedir(), 'test.sqlite')
  },
  production: {
    password: userInfo().username,
    dialect: 'sqlite',
    dialectModulePath: '@journeyapps/sqlcipher',
    storage: path.join(homedir(), 'prod.sqlite')
  }
};
