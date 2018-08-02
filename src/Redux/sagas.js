import { all } from "redux-saga/effects";
import { authSaga } from "./Auth/sagas";
import { articleSaga } from "./Article/sagas";
import { chatSaga } from "./Chat/sagas";
export const rootSaga = function* rootSaga() {
  yield all([authSaga(), articleSaga(), chatSaga()]);
};
