import axios from 'axios';
import { SERVER_REGISTRATION, GET_SERVER, GET_SERVERS, GET_SERVER_USERS, DELETE_SERVER_USER, ADD_SERVER_USER, LOGOUT_SERVER } from './actionTypes';

const initialState = {
    server: {},
    servers: {},
    serverUsers: {},
    error: false,
    redirect: false
};

export const serverRegister = (server_name, server_image, user_id) => {
    console.log(server_name, server_image, user_id);
    let data = axios
        .post('/api/createServer', { server_name, server_image, user_id })
        .then(res => res.data);
    return {
        type: SERVER_REGISTRATION,
        payload: data
    };
};

export const getAllServers = () => {
    let data = axios.get('/api/servers').then(res => {
        console.log('GET_SERVERS data', res.data)
        return res.data
    });
    return {
        type: GET_SERVERS,
        payload: data
    };
};

export default function (state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case GET_SERVERS + '_PENDING':
            return { ...state, redirect: false, error: false };
        case GET_SERVERS + '_FULFILLED':
            return { ...state, servers: payload, error: false };
        case GET_SERVERS + '_REJECTED':
            return { ...state, redirect: true, error: payload };
        case SERVER_REGISTRATION + '_FULFILLED':
            return { server: payload, redirect: false, error: false };
        case SERVER_REGISTRATION + '_REJECTED':
            return { ...state, error: payload };
        case LOGOUT_SERVER + '_FULFILLED':
            return { ...state, server: {}, servers: {}, serverUsers: {}, error: false, redirect: false };
        default:
            return state;
    };
};