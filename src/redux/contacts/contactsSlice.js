import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';
import { getContactsThunk } from './thunks';
import { handleFulfild, handlePending, handleRejected } from './handle';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleFulfild)
      .addCase(getContactsThunk.rejected, handleRejected);
    // НЕ СПРАЦЬОВУЄ ЛОАДЕР
    // .addMatcher(action => {
    //   action.type.endsWith('/pending');
    // }, handlePending)
    // .addMatcher(action => {
    //   action.type.endsWith('/rejected');
    // }, handleRejected);
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
