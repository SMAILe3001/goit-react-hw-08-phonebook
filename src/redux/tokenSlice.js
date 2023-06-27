import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  token: '',
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    newTokenUser(state, { payload }) {
      state.token = payload;
    },
  },
});

const persistConfig = {
  key: 'token',
  storage,
};

export const persistedTokenReduser = persistReducer(
  persistConfig,
  tokenSlice.reducer
);

export const { newTokenUser } = tokenSlice.actions;

export const tokenUser = state => state.token.token;
