import axios from "axios";

import { GET_FRIENDS, ADD_FRIEND, DELETE_FRIEND } from "./actionTypes";

const initialState = {
    friends: {}
};


export const getFriends = user_id => {
    let payload = axios.get(`/api/getFriends/${user_id}`).then(res => res.data);
    return {
        type: GET_FRIENDS,
        payload: payload
    };
};

export function addFriend(userId, friendId, accepted) {
    let data = axios
        .put(`/api/addFriend/${userId}?friendId=${friendId}?accepted=${true}`)
        .then(res => res.data);
    return {
        type: ADD_FRIEND,
        payload: data
    };
};

export function deleteFriend(userId, friendId) {
    let data = axios.delete(`/api/deleteFriend/${userId}?friendId=${friendId}`)
        .then(res => res.data)
    return {
        type: DELETE_FRIEND,
        payload: data
    };
};



export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_FRIENDS + "_FULFILLED":
            return { friends: payload };
        case GET_FRIENDS + "_PENDING":
            return { ...state };
        case ADD_FRIEND + '_FULFILLED':
            return { ...state, friends: payload };
        case DELETE_FRIEND + '_FULFILLED':
            return { ...state, friends: payload };
        default:
            return { ...state };
    }
}
