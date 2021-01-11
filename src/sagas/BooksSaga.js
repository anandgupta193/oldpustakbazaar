/* eslint-disable linebreak-style */
import { takeLatest, put, call } from 'redux-saga/effects';
import { GET_BOOKS, GET_BOOKS_SUCCESS } from '../actionTypes/BooksActionTypes';
import RestClient from '../utils/RestClient';

function* getBooksSaga() {
  const requestObject = {
    url: 'https://oldpushtak.firebaseio.com/BookDetails',
  };
  const response = yield call(RestClient.get, requestObject);
  // eslint-disable-next-line no-console
  console.log('Resp from Firebase', response);
  yield put({ type: GET_BOOKS_SUCCESS, payload: response });
}

export default function* watchDecrementCountSaga() {
  yield takeLatest(GET_BOOKS, getBooksSaga);
}
