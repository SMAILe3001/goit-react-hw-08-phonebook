import { filterSlice } from './filterSlice';
import { persistedThemeReduser } from './themeSlice';
import { contactsApi } from './contactsApi';
import { persistedTokenReduser } from './tokenSlice';
import { registerApi } from './authApi';

export const reducer = {
  filter: filterSlice.reducer,
  theme: persistedThemeReduser,
  token: persistedTokenReduser,
  [contactsApi.reducerPath]: contactsApi.reducer,
  [registerApi.reducerPath]: registerApi.reducer,
};
