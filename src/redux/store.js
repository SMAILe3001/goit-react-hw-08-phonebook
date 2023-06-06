import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { filterSlice } from './filterSlice';
import { themeSlice } from './themeSlice';
import { persistedContactReduser } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: persistedContactReduser,
    filter: filterSlice.reducer,
    theme: themeSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
