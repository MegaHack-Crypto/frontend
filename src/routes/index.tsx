import React from 'react';
import { Router, Redirect } from 'react-router-dom';
import { ModalSwitch, ModalRoute, ModalRouteProps } from 'react-router-modal-gallery';

import history from '../services/history';

import Home from '../pages/Home';
import COVID19 from '../pages/COVID-19';
import Login from '../pages/Login';
import Account from '../pages/Account';

import Route, { RouteProps } from './Route';

interface RouteItem extends Partial<ModalRouteProps>, RouteProps {
  modal?: boolean;
}

const routes: Array<RouteItem> = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
    modal: true,
    defaultParentPath: '/',
  },
  {
    path: '/covid',
    component: COVID19,
  },
  {
    path: '/account',
    component: Account,
    isPrivate: true,
  },
  {
    path: '*',
    render: () => <Redirect to="/" />,
  }
];

const Routes: React.FC = () => (
  <Router history={history}>
    <ModalSwitch 
      renderModal={() => 
        routes
          .filter(route => route.modal)
          .map(route => 
            <ModalRoute
              key={route.path as string}
              defaultParentPath={route.defaultParentPath as string}
              {...route}
            />)
      }>
      {routes.map(route => route.modal
        ? <ModalRoute
            key={route.path as string}
            defaultParentPath={route.defaultParentPath as string}
            {...route}
          />
        : <Route key={route.path as string} {...route} />)}
    </ModalSwitch>
  </Router>
)

export default Routes;
