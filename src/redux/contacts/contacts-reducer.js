import { combineReducers} from 'redux';
import { types } from './contacts-types';
const itemsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
];

const itemsReducer = (state = itemsInitialState, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];
    case types.DELETE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload;
    default:
      return state;
  }
};

const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer
})
  export default contactsReducer;