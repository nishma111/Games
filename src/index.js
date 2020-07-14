/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { history, configureFirebase } from './store';
import Root from './components/Root';

configureFirebase();

render(
  <AppContainer>
    <Root history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
