import { GET_BOOKS, CREATE_BOOK, FILTER_BOOKS } from '../actionTypes/BooksActionTypes';

export const getBooks = () => ({
  type: GET_BOOKS,
});

export const createBook = () => ({
  type: CREATE_BOOK,
});

export const applyFilter = (searchStr) => ({
  type: FILTER_BOOKS,
  searchStr,
});
