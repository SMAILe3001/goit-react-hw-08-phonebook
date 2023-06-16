export const selectContacts = state => ({
  ...state,
  contacts: state.contacts.contacts.toSorted((a, b) =>
    a.name.localeCompare(b.name)
  ),
});
