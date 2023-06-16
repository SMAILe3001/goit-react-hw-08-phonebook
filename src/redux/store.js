import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { contactsApi } from './contactsApi';

export const store = configureStore({
  reducer,
  middleware: defaultMiddlewere =>
    defaultMiddlewere().concat(contactsApi.middleware),
});
