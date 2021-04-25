import { types } from './contacts-types';

const addContact = (contact) => ({
  type: types.ADD,
  payload: contact,
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