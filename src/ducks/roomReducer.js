import axios from "axios";

import { GET_ROOMS, CREATE_ROOM } from "./actionTypes";

const initialState = {
  rooms: []
};

// app.get(`/api/getRooms`, rc.getRooms);

export const getRooms = server_id => {
  let rooms = axios.get(`/api/getRooms/${server_id}`).then(res => res.data);
  return {
    type: GET_ROOMS,
    payload: rooms
  };
};

export const createRoom = (room_name, server_id, user_id) => {
  let updatedRooms = axios
    .post(`/api/createRoom`, { room_name, server_id, user_id })
    .then(res => res.data);
  return {
    type: CREATE_ROOM,
    payload: updatedRooms
  };
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ROOMS + "_FULFILLED":
      return {
        rooms: payload
      };
      case GET_ROOMS + "_PENDING":
      return {
        ...state
      };
    case CREATE_ROOM + "_FULFILLED":
      return {
        rooms: payload
      };
    default:
      return { ...state };
  }
}
