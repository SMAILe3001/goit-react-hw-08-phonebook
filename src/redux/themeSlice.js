import { createSlice } from '@reduxjs/toolkit';

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

export const { themeTogle } = themeSlice.actions;

export const getTheme = state => state.theme.theme;
