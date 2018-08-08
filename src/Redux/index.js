import { createStore, applyMiddleware } from "redux";
import { reducers } from "./reducers";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";
import { authMiddleware } from "./Middlewares/auth.middleware";
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({
  open: "remote"
});
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(authMiddleware, sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
