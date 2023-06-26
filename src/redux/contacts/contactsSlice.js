import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchAllContacts, addContact, deleteContact } from './operations';

const pendingStatus = state => {
  state.isLoading = true;
};

const rejectedStatus = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilledGetContacts = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

const handleFulfilledAddContact = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;

  const existContact = state.items.find(item => item.name === payload.name);
  if (existContact) {
    return Notify.warning(`${existContact.name} is already in contacts`);
  }

  state.items.push(payload);
};

const handleFulfilledDeleteContact = (state, { payload }) => {
  state.items = state.items.filter(item => item.id !== payload.id);
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const itemsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchAllContacts.pending, pendingStatus)
      .addCase(fetchAllContacts.fulfilled, handleFulfilledGetContacts)
      .addCase(fetchAllContacts.rejected, rejectedStatus)
      .addCase(addContact.pending, pendingStatus)
      .addCase(addContact.fulfilled, handleFulfilledAddContact)
      .addCase(addContact.rejected, rejectedStatus)
      .addCase(deleteContact.pending, pendingStatus)
      .addCase(deleteContact.fulfilled, handleFulfilledDeleteContact)
      .addCase(deleteContact.rejected, rejectedStatus),
});

export const itemsReducer = itemsSlice.reducer;
