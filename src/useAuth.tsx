import React, { useContext, useState, useCallback, createContext, useMemo, useEffect } from 'react';

import api from './services/api';

export interface AuthContextProps {
  user: any;
  token: string;
  setAuth: (data: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<any>({
    user: {},
    token: null,
  });

  const user = useMemo(() => state?.user, [state]);
  const token = useMemo(() => state?.token, [state]);

  useEffect(() => {
    (async function(){
      const existsToken = window.localStorage.getItem('@healthchain:auth');

      if (existsToken) {
        let data = { token: existsToken, user: {} };

        try {
          const res = await api.get('/me', {
            headers: {
              Authorization: `Bearer ${existsToken}`,
            }
          });

          data.user = res.data || {};
        } catch (err) {}

        setState((oldState: any) => ({ ...oldState, ...data }));
      }
    })();
  }, []);

  useEffect(() => {
    if (token) {
      window.localStorage.setItem('@healthchain:auth', token);
    }
  }, [token]);

  const setAuth = useCallback((data: any) => {
    setState((oldState: any) => ({ ...oldState, ...data }));
  }, [setState]);

  const logout = useCallback(() => {
    window.localStorage.removeItem('@healthchain:auth');
    setState((oldState: any) => ({ ...oldState, user: {}, token: null }));
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, user, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, AuthContext, useAuth };
