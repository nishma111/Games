import React from 'react';
import { Switch, Redirect, Route, useHistory } from 'react-router-dom';

import { Authentication } from './pages';

const App = () => {
  const history = useHistory();

  const pages = [];

  return (
    <Switch>
      <Redirect exact from="/" to="/authentication" />
      <Route component={Authentication} exact path="/authentication" />
    </Switch>
  );
};

export default App;
