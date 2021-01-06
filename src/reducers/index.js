import { combineReducers } from 'redux';
import counter from './CounterReducer';
import books from './BooksReducer';

const rootReducer = combineReducers({
  counter,
  books,
});

export default rootReducer;
