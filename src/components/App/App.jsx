import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { useSelector } from 'react-redux';

import { getTheme } from 'redux/themeSlice';
import { theme } from 'theme';
import Leyout from '../Layout/Layout';

const Home = lazy(() => import('../../pages/Home'));
const SingUpPage = lazy(() => import('../../pages/SingUpPage'));
const LogIn = lazy(() => import('../../pages/LogInPage'));

export const App = () => {
  const activeTheme = useSelector(getTheme);
  return (
    <ThemeProvider theme={theme[activeTheme]}>
      <Routes>
        <Route path="/" element={<Leyout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<SingUpPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/contacts" element={<Home />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
