import { createReducer } from '@reduxjs/toolkit';
import {
  deleteContact,
  // submitContacts,
  changeFilter,
} from './phonebook-actions';
import {
  addContactSuccess,
  fetchContactSuccess,
  deleteContactSuccess,
} from './phonebook-actions';
// import defaultContacts from '../json/defaultContacts.json';

export const contactsReducer = createReducer([], {
  [fetchContactSuccess]: (_, action) => action.payload,
  [addContactSuccess]: (state, action) => [...state, action.payload],
  [deleteContactSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

export const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});
