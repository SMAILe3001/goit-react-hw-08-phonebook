import { filterSlice } from './filterSlice';
import { persistedThemeReduser } from './themeSlice';
import { contactsApi, registerApi } from './contactsApi';
import { persistedTokenReduser } from './tokenSlice';

export const reducer = {
  filter: filterSlice.reducer,
  theme: persistedThemeReduser,
  token: persistedTokenReduser,
  [contactsApi.reducerPath]: contactsApi.reducer,
  [registerApi.reducerPath]: registerApi.reducer,
};
