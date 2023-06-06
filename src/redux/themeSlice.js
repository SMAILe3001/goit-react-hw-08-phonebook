import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { LIGHT, DARK } from 'constants/theme';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: LIGHT,
  },
  reducers: {
    themeTogle(state) {
      state.theme = state.theme === LIGHT ? DARK : LIGHT;
    },
  },
});

export const { themeTogle } = themeSlice.actions;

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedThemeReduser = persistReducer(
  persistConfig,
  themeSlice.reducer
);

export const getTheme = state => state.theme.theme;
