import { Sequelize } from 'sequelize/types';
import { Counter } from '../../../db/models/counter';
import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux';

interface Database {
  connection: Sequelize;
  models: Models;
}

type Models = {
  Counter: typeof Counter;
};

type counterStateType = {
  counter: number;
};

type GetState = () => counterStateType;

type Dispatch = ReduxDispatch<Action<string>>;

type Store = ReduxStore<counterStateType, Action<string>>;
