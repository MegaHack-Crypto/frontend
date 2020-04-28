import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';

import Home from '../pages/Home';

import history from '../services/history';

const Routes: React.FC = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
)

export default Routes;
