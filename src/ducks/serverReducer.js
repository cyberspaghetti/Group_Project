import axios from 'axios';
import { SERVER_REGISTRATION, GET_USER_SERVER, GET_ALL_SERVERS, GET_SELECTED_SERVER_USERS, DELETE_SERVER_USER, ADD_SERVER_USER, GET_SERVER_NAME, LOGOUT_SERVER } from './actionTypes';

const initialState = {
    server: {},
    servers: {},
    serverUsers: {},
    serverName:{},
    error: false,
    redirect: false
};

export const serverRegister = (server_name, server_image, user_id) => {
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
        return res.data
    });
    return {
        type: GET_ALL_SERVERS,
        payload: data
    };
};

export const usersServer = (userId) => {
    let data = axios.get(`/api/server/${userId}`).then(res => {
        return res.data
    });
    return {
        type: GET_USER_SERVER,
        payload: data
    };
};

export const getSelectedServerUsers = (serverId) => {
    let data = axios.get(`/api/serverUsers/${serverId}`).then(res => {
        return res.data
    });
    return {
        type: GET_SELECTED_SERVER_USERS,
        payload: data
    };
};

export const getServerName = (serverId) => {
    console.log('serverid in name',serverId);
    let data = axios.get(`/api/serverName/${serverId}`).then(res => {
        return res.data
    });
    return {
        type: GET_SERVER_NAME,
        payload: data
    };
};


export default function (state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case GET_ALL_SERVERS + '_PENDING':
            return { ...state, redirect: false, error: false };
        case GET_ALL_SERVERS + '_FULFILLED':
            return { ...state, servers: payload, error: false };
        case GET_ALL_SERVERS + '_REJECTED':
            return { ...state, redirect: true, error: payload };
        case SERVER_REGISTRATION + '_FULFILLED':
            return { server: payload, redirect: false, error: false };
        case SERVER_REGISTRATION + '_REJECTED':
            return { ...state, error: payload };
        case GET_SELECTED_SERVER_USERS + '_PENDING':
            return { ...state, redirect: false, error: false };
        case GET_SELECTED_SERVER_USERS + '_FULFILLED':
            return { ...state, serverUsers: payload, error: false };
        case GET_SELECTED_SERVER_USERS + '_REJECTED':
            return { ...state, redirect: true, error: payload };
        case GET_SERVER_NAME + '_PENDING':
            return { ...state, redirect: false, error: false };
        case GET_SERVER_NAME + '_FULFILLED':
            console.log('this is the stuff in the server name', payload)
            return { ...state, serverName: payload, error: false };
        case GET_SERVER_NAME + '_REJECTED':
            return { ...state, redirect: true, error: payload };
        case GET_USER_SERVER + '_PENDING':
            return { ...state, redirect: false, error: false };
        case GET_USER_SERVER + '_FULFILLED':
            return { ...state, server: payload, error: false };
        case GET_USER_SERVER + '_REJECTED':
            return { ...state, redirect: true, error: payload };
        case LOGOUT_SERVER + '_FULFILLED':
            return { ...state, server: {}, servers: {}, serverUsers: {}, error: false, redirect: false };
        default:
            return state;
    };
};