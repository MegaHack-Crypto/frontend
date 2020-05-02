import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { ModalSwitch, ModalRoute } from 'react-router-modal-gallery';

import Home from '../pages/Home';
import COVID19 from '../pages/COVID-19';

import history from '../services/history';
import Login from '../pages/Login';

const Routes: React.FC = () => (
  <Router history={history}>
    <ModalSwitch renderModal={() => (
      <ModalRoute defaultParentPath="/" path="/login" component={Login} />
    )}>
      <Route exact path="/" component={Home} />
      <Route path="/covid" component={COVID19} />
      <ModalRoute defaultParentPath="/" path="/login" component={Login} />
      <Route path="*" render={() => <Redirect to="/" />} />
    </ModalSwitch>
  </Router>
)

export default Routes;
