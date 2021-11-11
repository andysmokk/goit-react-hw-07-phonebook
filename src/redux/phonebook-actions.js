import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('addContactRequest');
export const addContactSuccess = createAction('addContactSuccess');
export const addContactError = createAction('addContactError');

export const deleteContact = createAction('contact/delete');
// export const submitContacts = createAction('contact/submit');
export const changeFilter = createAction('contact/changeFilter');
