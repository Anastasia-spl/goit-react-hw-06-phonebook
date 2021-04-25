import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactActions from './contacts-actions';

const itemsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
];

const itemsReducer = createReducer(itemsInitialState, {
  [contactActions.addContact]: (state, { payload }) => [payload, ...state],
  [contactActions.deleteContact] : (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [contactActions.filterContact]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer
})
  export default contactsReducer;