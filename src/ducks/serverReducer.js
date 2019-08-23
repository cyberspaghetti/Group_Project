import axios from "axios";
import {
  SERVER_REGISTRATION,
  GET_SERVER,
  GET_SERVERS,
  GET_SERVER_USERS,
  DELETE_SERVER_USER,
  ADD_SERVER_USER,
  LOGOUT_SERVER,
  GET_ROOM_NAME,
} from "./actionTypes";

const initialState = {
  server: {},
  servers: [],
  serverUsers: [],
  error: false,
  redirect: false,
  name: "",
};

export const serverRegister = (server_name, server_image, user_id) => {
  console.log('hit in server register')
  let data = axios
    .post("/api/createServer", { server_name, server_image, user_id })
    .then(res => res.data);
  return {
    type: SERVER_REGISTRATION,
    payload: data
  };
};

export const getAllServers = () => {
  let data = axios.get("/api/servers").then(res => {
    return res.data;
  });
  return {
    type: GET_SERVERS,
    payload: data
  };
};

export const getRoomName = (socket_room_id, server_id) => {
  const name = axios
    .get(`/api/getRoomName/${socket_room_id}?server_id=${server_id}`)
    .then(res => res.data);
  return {
    type: GET_ROOM_NAME,
    payload: name
  };
};

export default function(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case GET_SERVERS + "_PENDING":
      return { ...state, redirect: false, error: false };
    case GET_SERVERS + "_FULFILLED":
      console.log('server payload',payload);
      return { ...state, servers: payload, error: false };
    case GET_SERVERS + "_REJECTED":
      return { ...state, redirect: true, error: payload };
    case SERVER_REGISTRATION + "_FULFILLED":
      return { servers: payload, redirect: false, error: false };
    case SERVER_REGISTRATION + "_REJECTED":
      return { ...state, error: payload };
    case LOGOUT_SERVER + "_FULFILLED":
      return {
        ...state,
        server: {},
        servers: {},
        serverUsers: {},
        error: false,
        redirect: false
      };
    case GET_ROOM_NAME + "_FULFILLED":
      return { ...state, name: payload };
    default:
      return state;
  }
}
