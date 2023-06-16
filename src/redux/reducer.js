import { filterSlice } from './filterSlice';
import { themeSlice } from './themeSlice';
import { contactsSlice } from './contacts/contactsSlice';
import { contactsApi } from './contactsApi';

export const reducer = {
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
  theme: themeSlice.reducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
};
