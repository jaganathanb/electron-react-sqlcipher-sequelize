import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Counter.css';
import routes from '../constants/routes.json';
import { useSelector, useDispatch } from 'react-redux';
import { counterStateType } from '../@types';
import { increment, decrement, incrementIfOdd, incrementAsync } from '../actions/counter';

export default function Counter() {
  const count = useSelector<counterStateType>((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
      <div className={`counter ${styles.counter}`} data-tid="counter">
        {count}
      </div>
      <div className={styles.btnGroup}>
        <button className={styles.btn} onClick={() => dispatch(increment())} data-tclass="btn" type="button">
          <i className="fa fa-plus" />
        </button>
        <button className={styles.btn} onClick={() => dispatch(decrement())} data-tclass="btn" type="button">
          <i className="fa fa-minus" />
        </button>
        <button className={styles.btn} onClick={() => dispatch(incrementIfOdd())} data-tclass="btn" type="button">
          odd
        </button>
        <button className={styles.btn} onClick={() => dispatch(incrementAsync())} data-tclass="btn" type="button">
          async
        </button>
      </div>
    </div>
  );
}
