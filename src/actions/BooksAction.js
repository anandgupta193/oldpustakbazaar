import { GET_BOOKS, CREATE_BOOK } from '../actionTypes/BooksActionTypes';

export const getBooks = () => ({
  type: GET_BOOKS,
});

export const createBook = () => ({
  type: CREATE_BOOK,
});
