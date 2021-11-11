import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('addContactRequest');
export const addContactSuccess = createAction('addContactSuccess');
export const addContactError = createAction('addContactError');

export const fetchContactRequest = createAction('fetchContactRequest');
export const fetchContactSuccess = createAction('fetchContactSuccess');
export const fetchContactError = createAction('fetchContactError');

export const deleteContact = createAction('contact/delete');
// export const submitContacts = createAction('contact/submit');
export const changeFilter = createAction('contact/changeFilter');
