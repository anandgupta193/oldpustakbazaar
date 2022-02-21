/* eslint-disable linebreak-style */
import { takeLatest, put, call } from 'redux-saga/effects';
import { GET_BOOKS, GET_BOOKS_SUCCESS } from '../actionTypes/BooksActionTypes';
import RestClient from '../utils/RestClient';
import { BASE_URL } from '../constants/AppConstants';

function* getBooksSaga() {
  const requestObject = {
    url: BASE_URL,
  };
  const response = yield call(RestClient.get, requestObject);
  yield put({ type: GET_BOOKS_SUCCESS, payload: response });
}

export default function* watchDecrementCountSaga() {
  yield takeLatest(GET_BOOKS, getBooksSaga);
}
