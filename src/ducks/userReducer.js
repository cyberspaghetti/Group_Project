import axios from "axios";

//action types
import { LOGOUT, GET_USER, EDIT_USER } from "./actionTypes";

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
    payload: axios.delete(`/api/logout`)
  };
};

export const editUser = (auth0_id, new_user_name, new_user_image) => {
  console.log("hit reducer", auth0_id, new_user_name, new_user_image);
  let updatedUser = axios
    .put(`/api/editUser`, {
      auth0_id,
      new_user_name,
      new_user_image
    })
    .then(res => res.data);
  return {
    type: EDIT_USER,
    payload: updatedUser
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
    case EDIT_USER + "_FULFILLED":
      return { ...state, user: payload };
    default:
      return state;
  }
}
