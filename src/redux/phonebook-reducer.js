import { createReducer } from '@reduxjs/toolkit';
import {
  deleteContact,
  // submitContacts,
  changeFilter,
} from './phonebook-actions';
import { submitContacts } from './phonebook-operations';
// import defaultContacts from '../json/defaultContacts.json';

export const contactsReducer = createReducer([], {
  [submitContacts]: (state, action) => [action.payload, ...state],
  [deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

export const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});
