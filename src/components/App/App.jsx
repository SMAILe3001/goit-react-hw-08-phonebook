import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { useSelector } from 'react-redux';

import { getTheme } from 'redux/themeSlice';
import { theme } from 'theme';
import Leyout from '../Layout/Layout';

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
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<SingUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/contacts" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
