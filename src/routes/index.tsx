import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';

import Home from '../pages/Home';
import COVID19 from '../pages/COVID-19';

import history from '../services/history';

const Routes: React.FC = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/covid" component={COVID19} />
    </Switch>
  </Router>
)

export default Routes;
