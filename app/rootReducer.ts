import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import counter from './features/counter/reducers';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    counter
  });
}
