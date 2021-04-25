import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/add', contact => {
  return {
    payload: {
      id: uuidv4(), ...contact
    },
  }
});

const deleteContact = createAction('contacts/delete');
const filterContact = createAction('contacts/filter');

export default { addContact, deleteContact , filterContact };