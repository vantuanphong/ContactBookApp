
import { put,call } from "redux-saga/effects";
// api

import { ActionEvent } from "../actions/actionTypes";
import { getAllContact } from "../actions/contactAction";

function* fetchContactList(): any {
  try {
    // call request
    // const response = yield call(getAllContact);
    // console.log(response)
    // if return 200 then dispatch get todo success
    // if return different code get contact fail (different code 404, 403, ....)
    // if (response.status === 200) {
      // After success send request to reducer update state
      // yield put({ type: ActionEvent.CONTACT_GET_ALL, data: response });
    // } else {
      // yield put({ type: ActionEvent.CONTACT_GET_ALL_FAILURE, error: "false" });
    // }
  } catch (e) {
    //  yield put({ type: ActionEvent.CONTACT_GET_ALL, error: "false" });
  }
}

export default function* (action:any) {
  yield call(fetchContactList);
}