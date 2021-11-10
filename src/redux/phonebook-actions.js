import { createAction } from '@reduxjs/toolkit';

export const deleteContact = createAction('contact/delete');
export const submitContacts = createAction('contact/submit');
export const changeFilter = createAction('contact/changeFilter');
