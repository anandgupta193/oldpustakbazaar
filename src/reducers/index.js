/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import counter from './CounterReducer';
import books from './BooksReducer';
import wishList from './WishListReducer';

const rootReducer = combineReducers({
  counter,
  books,
  wishList,
});

export default rootReducer;
