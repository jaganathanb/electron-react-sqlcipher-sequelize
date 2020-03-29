import { GetState, Dispatch } from '../@types';
import { Database } from '../@types';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function increment() {
  return async (dispatch: Dispatch, getState: GetState, api: Database) => {
    const state = getState();
    const model = api.models.Counter;

    const [record] = await model.findOrCreate({
      where: {
        id: 1
      },
      defaults: {
        count: state.counter
      }
    });

    record.count = state.counter;
    await record.save();

    dispatch({ type: INCREMENT_COUNTER });
  };
}

export function decrement() {
  return async (dispatch: Dispatch, getState: GetState, api: Database) => {
    const state = getState();
    const model = api.models.Counter;

    const [record] = await model.findOrCreate({
      where: {
        id: 1
      },
      defaults: {
        count: state.counter
      }
    });

    record.count = state.counter;
    await record.save();

    dispatch({ type: DECREMENT_COUNTER });
  };
}

export function incrementIfOdd() {
  return (dispatch: Dispatch, getState: GetState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch({ type: INCREMENT_COUNTER });
  };
}

export function incrementAsync(delay = 1000) {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch({ type: INCREMENT_COUNTER });
    }, delay);
  };
}
