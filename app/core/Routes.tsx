import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from '../features/counter/routes.json';
import App from './components/App';
import HomePage from '../features/counter/containers/HomePage';
import Counter from '../features/counter/components/Counter';

export default function Routes() {
  return (
    <App>
      <BrowserRouter>
        <Switch>
          <Route path={routes.COUNTER} component={Counter} />
          <Route path={routes.HOME} component={HomePage} />
        </Switch>
      </BrowserRouter>
    </App>
  );
}
