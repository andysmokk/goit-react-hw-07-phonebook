import { createReducer } from '@reduxjs/toolkit';
import {
  deleteContact,
  // submitContacts,
  changeFilter,
} from './phonebook-actions';
import { addContacts, fetchContacts } from './phonebook-operations';
// import defaultContacts from '../json/defaultContacts.json';

export const contactsReducer = createReducer([], {
  [addContacts]: (state, action) => [action.payload, ...state],
  [fetchContacts]: (_, action) => action.payload,

  [deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

export const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});
