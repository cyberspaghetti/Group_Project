import axios from "axios";

//action types
import { LOGOUT, GET_USER } from "./actionTypes";

const initialState = {
  user: {},
  loggedIn: false
};

export const getUser = () => {
  let data = axios.get("/api/getUser").then(res => res.data);
  return {
    type: GET_USER,
    payload: data
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
    case GET_USER + "_PENDING":
      return {
        ...state
      };
    case GET_USER + "_FULFILLED":
      return {
        ...state,
        user: payload,
        loggedIn: true
      };
    case LOGOUT + "_FULFILLED":
      return { user: {}, loggedIn: false };
    default:
      return state;
  }
}
