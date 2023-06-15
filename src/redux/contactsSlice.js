import { createSlice } from '@reduxjs/toolkit';
// import { getContactsServer } from 'components/api/servise';

// export const getProductsThunk = () => {
//   return async dispatch => {
//     dispatch(contactsSlice.actions.fetching());
//     try {
//       const data = await getContactsServer();
//       dispatch(contactsSlice.actions.fetchSuccess(data));
//     } catch (error) {
//       dispatch(contactsSlice.actions.fetchError(error));
//     }
//   };
// };

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
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
