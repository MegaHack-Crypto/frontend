import React from 'react';
import { Redirect, Route as BaseRoute, RouteProps as BaseRouteProps } from 'react-router-dom';

import { useAuth } from '../useAuth';

export interface RouteProps extends BaseRouteProps {
  isPrivate?: boolean;
}

const Route: React.FC<any> = ({ component: Component, isPrivate = false, ...rest }) => {
  const { token } = useAuth();

  if (!token && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (token && !isPrivate) {
    return <Redirect to="/account" />;
  }

  return (
    <BaseRoute
      {...rest}
      render={props => <Component {...props} />}
    />
  );
};

export default Route;
