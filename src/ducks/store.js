import { createStore, combineReducers, applyMiddleware } from "redux";

import promiseMiddleware from "redux-promise-middleware";

//reducers
import userReducer from "./userReducer";
import serverReducer from "./serverReducer";

const rootReducer = combineReducers({
  user: userReducer,
  server: serverReducer
});

export default createStore(
  rootReducer,
    applyMiddleware(promiseMiddleware)
);
