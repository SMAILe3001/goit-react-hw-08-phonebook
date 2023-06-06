import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';

import { App } from 'components/App';
import { store } from 'redux/store';

import { theme } from 'theme';
import './index.css';
import { LIGHT, DARK } from 'constants/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme[DARK]}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
