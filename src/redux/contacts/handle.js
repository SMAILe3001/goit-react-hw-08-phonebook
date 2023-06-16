export const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

export const handleFulfild = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = payload;
  state.error = '';
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
