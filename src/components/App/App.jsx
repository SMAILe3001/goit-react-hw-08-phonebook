import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { theme } from 'theme';
import Leyout from '../Layout/Layout';
import { PrivateRoute } from 'privateRoute/PrivateRoute';
import { RestrictedRoute } from 'restrictedRoute/RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';

const Home = lazy(() => import('../../pages/Home'));
const PhoneBook = lazy(() => import('../../pages/PhoneBook'));
const SingUpPage = lazy(() => import('../../pages/SingUpPage'));
const LogIn = lazy(() => import('../../pages/LogInPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <ThemeProvider theme={theme.light}>
        <Routes>
          <Route path="/" element={<Leyout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<SingUpPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute component={<LogIn />} redirectTo="/contacts" />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={<PhoneBook />} redirectTo="/login" />
              }
            />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Route>
        </Routes>
      </ThemeProvider>
    )
  );
};
