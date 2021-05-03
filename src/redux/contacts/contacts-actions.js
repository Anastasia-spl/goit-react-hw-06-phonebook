import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction('contacts/add', contact => {
  return {
    payload: {
      id: uuidv4(), ...contact
    },
  }
});

export const deleteContact = createAction('contacts/delete');
export const filterContact = createAction('contacts/filter');

// export default { addContact, deleteContact , filterContact };