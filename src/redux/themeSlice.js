import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { LIGHT, DARK } from 'constants/theme';

const initialState = {
  theme: LIGHT,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeTogle(state) {
      state.theme = state.theme === LIGHT ? DARK : LIGHT;
    },
  },
});

const persistConfig = {
  key: 'theme',
  storage,
};

export const persistedThemeReduser = persistReducer(
  persistConfig,
  themeSlice.reducer
);

export const { themeTogle } = themeSlice.actions;

export const getTheme = state => state.theme.theme;
