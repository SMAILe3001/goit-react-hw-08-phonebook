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
import { persistedThemeReduser } from './themeSlice';
import { persistedContactReduser } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: persistedContactReduser,
    filter: filterSlice.reducer,
    theme: persistedThemeReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
