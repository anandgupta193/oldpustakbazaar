import { GET_BOOKS_SUCCESS } from '../actionTypes/BooksActionTypes';
import bookData from '../../oldpushtak-export.json';

const defaultState = bookData;

const BooksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_BOOKS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default BooksReducer;
