import { all, takeLatest } from 'redux-saga/effects';
import fetchContactList from './contactSaga';
import { ActionEvent } from '../actions/actionTypes'

// use when call real api
const sagas = function* () {
  yield all([takeLatest(ActionEvent.CONTACT_GET_ALL, fetchContactList)]);
};

export default sagas;