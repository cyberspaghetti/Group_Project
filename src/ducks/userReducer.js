import axios from "axios";

//action types
import { LOGIN, LOGOUT } from "./actionTypes";

const initialState = {
  user: {},
  loggedIn: false
};

export const userData = () => {
  let user = axios.get("/api/user-data").then(res => res.data.user);
  return {
    type: LOGIN,
    payload: user
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: axios.post(`/api/logout`)
  };
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN + "_FULFILLED":
      return { ...state, user: payload, loggedIn: true };
    case LOGOUT + "_FULFILLED":
      return { user: {}, loggedIn: false };
    default:
      return state;
  }
}
