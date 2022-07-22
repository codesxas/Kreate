import { all, fork } from "redux-saga/effects";

import { PostSaga } from "./unsplash";

export default function* rootSaga() {
  yield all([fork(PostSaga)]);
}
