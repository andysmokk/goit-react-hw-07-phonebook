import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './phonebook-actions';

export const addContacts = contact => dispatch => {
  dispatch(addContactRequest());
  console.log('contact', contact);

  axios
    .post('http://localhost:3000/contacts', contact)
    .then(({ data }) => {
      console.log('data', data);
      dispatch(addContactSuccess(data));
    })
    .catch(error => dispatch(addContactError(error)));
};

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactRequest());

  axios
    .get('http://localhost:3000/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error)));
};

export const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`http://localhost:3000/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
};

// export const submitContacts = text => async dispatch => {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(text),
//   };

//   await dispatch(addContactRequest());

//   return await fetch('http://localhost:3000/contacts', options)
//     .then(response => response.json())
//     .then(data => dispatch(addContactSuccess(data)))
//     .catch(error => dispatch(addContactError(error)));
// };

// export const fetchContacts = () => async dispatch => {
//   await dispatch(fetchContactRequest());

//   return await fetch('http://localhost:3000/contacts')
//     .then(response => response.json())
//     .then(data => dispatch(fetchContactSuccess(data)))
//     .catch(error => dispatch(fetchContactError(error)));
// };
