import { ADD_TO_WISH_LIST } from '../actionTypes/BooksActionTypes';
import bookData from '../../oldpushtak-export.json';

const defaultState = {
  BookDetails: [],
};

const WishListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_WISH_LIST:
      return { BookDetails: [...state.BookDetails, bookData.BookDetails.find((elem) => elem.Name === action.payload)] };
    default:
      return state;
  }
};

export default WishListReducer;
