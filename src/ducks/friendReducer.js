import axios from "axios";
import {
  GET_FRIENDS,
  ADD_FRIEND,
  DELETE_FRIEND,
  FRIEND_REQUESTS,
  REJECT_FRIEND,
  ACCEPT_FRIEND
} from "./actionTypes";

const initialState = {
  friends: [],
  requests: []
};

export const getFriends = user_id => {
  let payload = axios.get(`/api/getFriends/${user_id}`).then(res => res.data);
  return {
    type: GET_FRIENDS,
    payload: payload
  };
};

export function addFriend(user_id, friend_id) {
  let data = axios
    .put(`/api/addFriend`, { user_id, friend_id })
    .then(res => res.data);
  return {
    payload: data
  };
}

export function removeFriend(userId, friendId) {
  console.log("hit reducer", userId, friendId);
  let data = axios
    .delete(`/api/deleteFriend/${userId}?friendId=${friendId}`)
    .then(res => res.data);
  return {
    type: DELETE_FRIEND,
    payload: data
  };
}

//friend requests
export function friendRequests(user_id) {
  let requests = axios
    .get(`/api/friendRequests/${user_id}`)
    .then(res => res.data);
  return {
    type: FRIEND_REQUESTS,
    payload: requests
  };
}

export function rejectFriend(user_friend_junction, user_id) {
  let updatedRequests = axios
    .delete(`/api/rejectFriend/${user_friend_junction}?user_id=${user_id}`)
    .then(res => res.data);
  return {
    type: REJECT_FRIEND,
    payload: updatedRequests
  };
}

export function acceptFriend(user_friend_junction, user_id) {
  let updated = axios
    .put("/api/acceptFriend", { user_friend_junction, user_id })
    .then(res => res.data);
  return {
    type: ACCEPT_FRIEND,
    payload: updated
  };
}

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_FRIENDS + "_FULFILLED":
      return { ...state, friends: payload };
    case GET_FRIENDS + "_PENDING":
      return { ...state };
    case ADD_FRIEND + "_FULFILLED":
      return { ...state, friends: payload };
    case DELETE_FRIEND + "_FULFILLED":
      return { ...state, friends: payload };
    case FRIEND_REQUESTS + "_FULFILLED":
      return { ...state, requests: payload };
    case REJECT_FRIEND + "_FULFILLED":
      return { ...state, requests: payload };
    case ACCEPT_FRIEND + "_FULFILLED":
      return {
        ...state,
        requests: payload.requests,
        friends: payload.updatedFriends
      };
    default:
      return { ...state };
  }
}
