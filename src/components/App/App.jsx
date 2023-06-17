import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { useSelector } from 'react-redux';

import { getTheme } from 'redux/themeSlice';
import { theme } from 'theme';
import Leyout from './../../Layout/Layout';

const Home = lazy(() => import('../pages/Home'));

export const App = () => {
  const activeTheme = useSelector(getTheme);
  return (
    <ThemeProvider theme={theme[activeTheme]}>
      <Routes>
        <Route path="/" element={<Leyout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
