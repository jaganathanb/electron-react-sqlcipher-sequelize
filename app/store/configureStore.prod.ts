import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from '../reducers';
import { Store, counterStateType } from '../reducers/types';

const history = createHashHistory();
const rootReducer = createRootReducer(history);
const router = routerMiddleware(history);

function configureStore(db: Db, initialState?: counterStateType): Store {
  const enhancer = applyMiddleware(thunk.withExtraArgument(db), router);

  return createStore(rootReducer, initialState, enhancer);
}

export default { configureStore, history };
