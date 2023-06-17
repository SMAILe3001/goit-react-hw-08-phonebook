import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
  },
});

export const { addContact } = contactsSlice.actions;
