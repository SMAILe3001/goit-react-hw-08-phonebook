import { filterSlice } from './filterSlice';
import { themeSlice } from './themeSlice';
import { contactsApi } from './contactsApi';

export const reducer = {
  filter: filterSlice.reducer,
  theme: themeSlice.reducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
};
