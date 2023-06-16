import { createSlice } from '@reduxjs/toolkit';
import { getContactsServer } from 'components/api/servise';

export const getContactsThunk = () => {
  return async dispatch => {
    dispatch(contactsSlice.actions.fetching());
    try {
      const data = await getContactsServer();
      dispatch(contactsSlice.actions.fetchSuccess(data));
    } catch (error) {
      dispatch(contactsSlice.actions.fetchError(error));
    }
  };
};

const initialState = {
  contacts: [],
  isLoading: false,
  error: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    fetching: state => {
      state.isLoading = true;
    },
    fetchSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.contacts = payload;
      state.error = '';
    },
    fetchError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export const getContacts = state => state.contacts.contacts;
