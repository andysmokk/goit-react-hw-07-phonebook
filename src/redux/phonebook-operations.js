import {
  addContactRequest,
  addContactSuccess,
  addContactError,
} from './phonebook-actions';

export const submitContacts = text => async dispatch => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(text),
  };

  await dispatch(addContactRequest());

  return await fetch('http://localhost:3000/contacts', options)
    .then(response => response.json())
    .then(data => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};
