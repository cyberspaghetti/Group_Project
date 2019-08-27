import { createStore, combineReducers, applyMiddleware } from "redux";

import promiseMiddleware from "redux-promise-middleware";

//reducers
import userReducer from "./userReducer";
import serverReducer from "./serverReducer";
import friendReducer from './friendReducer'
import roomReducer from './roomReducer'
import postReducer from './postReducer'

const rootReducer = combineReducers({
  user: userReducer,
  friends: friendReducer,
  server: serverReducer,
  rooms: roomReducer,
  posts: postReducer
  
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(promiseMiddleware)
  )
  )
