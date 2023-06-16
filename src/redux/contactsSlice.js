import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getContactsServer } from 'components/api/servise';

export const getContactsThunk = createAsyncThunk(
  'contacts/getAllContacts',
  () => getContactsServer()
);

const initialState = {
  contacts: [],
  isLoading: false,
  error: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getContactsThunk.pending]: state => {
      state.isLoading = true;
    },
    [getContactsThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.contacts = payload;
      state.error = '';
    },
    [getContactsThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export const getContacts = state => state.contacts.contacts;
