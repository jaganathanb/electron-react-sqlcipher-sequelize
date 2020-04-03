import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import Root from './Root';
import { configureStore, history } from './store';
import './app.global.css';

import { setupDb, db } from './db';

const store = configureStore(db);

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

const domReady = async () => {
  const done = await setupDb();

  if (done) {
    render(
      <AppContainer>
        <Root store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  } else {
    render(
      <>
        <span>Error while loading the application </span>
      </>,
      document.getElementById('root')
    );
  }
};

document.addEventListener('DOMContentLoaded', domReady);
