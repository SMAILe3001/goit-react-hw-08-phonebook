import { filterSlice } from './filterSlice';
import { themeSlice } from './themeSlice';
import { contactsSlice } from './contactsSlice';

export const reducer = {
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
  theme: themeSlice.reducer,
};
