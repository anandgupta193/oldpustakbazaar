import { GET_BOOKS_SUCCESS, FILTER_BOOKS } from '../actionTypes/BooksActionTypes';
import bookData from '../../oldpushtak-export.json';

const defaultState = bookData;

const BooksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_BOOKS_SUCCESS:
      return action.payload;
    case FILTER_BOOKS:
      return { BookDetails: bookData.BookDetails.filter((element) => element.Name.includes(action.searchStr)) };
    default:
      return state;
  }
};

export default BooksReducer;
