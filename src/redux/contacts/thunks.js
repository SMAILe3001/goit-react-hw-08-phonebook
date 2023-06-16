import { createAsyncThunk } from '@reduxjs/toolkit';

import { getContactsServer } from 'components/api/servise';

export const getContactsThunk = createAsyncThunk(
  'contacts/getAllContacts',
  () => getContactsServer()
);
