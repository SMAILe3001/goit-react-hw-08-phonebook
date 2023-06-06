const { createSlice } = require('@reduxjs/toolkit');

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterContact } = filterSlice.actions;
