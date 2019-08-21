import axios from "axios";

import { GET_FRIENDS, ADD_FRIEND } from "./actionTypes";

const initialState = {
    friends: {}
};

// app.get(`/api/getRooms`, rc.getRooms);

export const getFriends = user_id => {
    console.log('hit friends', user_id)
    let payload = axios.get(`/api/getFriends/${user_id}`).then(res => res.data);
    return {
        type: GET_FRIENDS,
        payload: payload
    };
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_FRIENDS + "_FULFILLED":
            console.log('friends payload', payload);
             return { friends: payload };
        case GET_FRIENDS + "_PENDING":
            return { ...state };
        default:
            return { ...state };
    }
}
