import { types } from './contacts-types';
import { v4 as uuidv4 } from 'uuid';

const addContact = (contact) => ({
  type: types.ADD,
  payload: {id: uuidv4(), ...contact},
})

const deleteContact = (id) => ({
  type: types.DELETE,
  payload: id,
})

const filterContact = (text) => ({
  type: types.FILTER,
  payload: text,
})

export { addContact, deleteContact , filterContact};