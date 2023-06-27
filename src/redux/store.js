import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { contactsApi, registerApi } from './contactsApi';

export const store = configureStore({
  reducer,
  middleware: defaultMiddlewere =>
    defaultMiddlewere({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(contactsApi.middleware)
      .concat(registerApi.middleware),
});

export const persistor = persistStore(store);
