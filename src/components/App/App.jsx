import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { useSelector } from 'react-redux';

import { getTheme } from 'redux/themeSlice';
import { theme } from 'theme';
import Leyout from '../Layout/Layout';
import PrivateRoute from 'privateRoute/PrivateRoute';
import RestrictedRoute from 'restrictedRoute/RestrictedRoute';

const HomePage = lazy(() => import('../../pages/HomePage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const SingUpPage = lazy(() => import('../../pages/SingUpPage'));
const LogInPage = lazy(() => import('../../pages/LogInPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));

export const App = () => {
  const activeTheme = useSelector(getTheme);

  return (
    <ThemeProvider theme={theme[activeTheme]}>
      <Routes>
        <Route path="/" element={<Leyout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
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
              <RestrictedRoute
                component={<LogInPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
