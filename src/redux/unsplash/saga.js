import { takeLatest, put, call } from "redux-saga/effects";
import * as types from "./actionTypes";
import * as actions from "./actions";
import * as api from "../../helpers/backend_helper";

function* onGetItems(action) {
  try {
    const response = yield call(() => api.getItems(action.params));
    yield put(actions.getItemsSuccess(response));
  } catch (error) {
    yield put(actions.getItemsFail(error.response));
  }
}

function* PostSaga() {
  yield takeLatest(types.GET_ITEMS, onGetItems);
}

export default PostSaga;
