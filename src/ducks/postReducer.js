import axios from 'axios';
import { CREATE_POST, GET_ALL_POSTS, ADD_POST, DELETE_POST } from './actionTypes';

const initialState = {
    post: {},
    posts: {},
    error: false,
    redirect: false
};

export const createPost = (post_name, post_image, user_id) => {
    let data = axios
        .post('/api/createPost', { post_name, post_image, user_id })
        .then(res => res.data);
    return {
        type: CREATE_POST,
        payload: data
    };
};

export const getAllPosts = () => {
    let data = axios.get('/api/getAllPosts').then(res => {
        return res.data
    });
    return {
        type: GET_ALL_POSTS,
        payload: data
    };
};

export function addPost(userId, postId) {
    console.log('add Post reducer', userId, postId)
    let data = axios
        .put(`/api/addPost/${userId}?postId=${postId}`)
        .then(res => res.data);
    console.log(data)
    return {
        type: ADD_POST,
        payload: data
    };
};

export function deletePost(userId, postId) {
    console.log('deletePost Reducer', userId, postId)
    let data = axios.delete(`/api/deletePost/${userId}?postId=${postId}`)
        .then(res => res.data)
    console.log('res delete data', data)
    return {
        type: DELETE_POST,
        payload: data
    };
};

export default function (state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case GET_ALL_POSTS + '_PENDING':
            return { ...state, redirect: false, error: false };
        case GET_ALL_POSTS + '_FULFILLED':
            return { ...state, posts: payload, error: false };
        case GET_ALL_POSTS + '_REJECTED':
            return { ...state, redirect: true, error: payload };
        case CREATE_POST + '_FULFILLED':
            return { post: payload, redirect: false, error: false };
        case CREATE_POST + '_REJECTED':
            return { ...state, error: payload };
        default:
            return state;
    };
};