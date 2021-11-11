export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;
export const isLoader = state => state.loading;

export const getFilteredContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);

  const normalizedFilter = filter.toLocaleLowerCase();
  return contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter),
  );
};
