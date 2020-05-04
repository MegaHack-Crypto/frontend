import React from 'react';

import { AuthProvider } from './useAuth';

import Routes from './routes';
import Styles from './styles';

const App: React.FC = () => (
  <AuthProvider>
    <Styles />
    <Routes />
  </AuthProvider>
);

export default App;
