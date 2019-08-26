import axios from 'axios';
import { CREATE_POST, GET_ALL_POSTS, EDIT_POST, DELETE_POST } from './actionTypes';

const initialState = {
    post: {},
    posts: [],
    error: false,
    redirect: false
};

export const createPost = (user_id, news_post_title, news_post_image, news_post_body, news_post_date) => {
    console.log('create post reducer hit', user_id, news_post_title, news_post_image, news_post_body, news_post_date)
    let data = axios
        .post(`/api/createPost`, { user_id, news_post_title, news_post_image, news_post_body, news_post_date })
        .then(res => res.data);
    return {
        type: CREATE_POST,
        payload: data
    };
};

export const getAllPosts = () => {
    let data = axios.get('/api/getAllPosts').then(res => res.data);
    return {
        type: GET_ALL_POSTS,
        payload: data
    };
};

export function editPost(user_id, news_post_title, news_post_image, news_post_body, news_post_date) {
    let data = axios
        .put(`/api/editPost/:newsPostId`, { user_id, news_post_title, news_post_image, news_post_body, news_post_date })
        .then(res => res.data);
    return {
        type: EDIT_POST,
        payload: data
    };
};

export function deletePost(userId, postId) {
    let data = axios.delete(`/api/deletePost/${userId}?postId=${postId}`)
        .then(res => res.data)
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
        case EDIT_POST + '_PENDING':
            return { ...state, redirect: false, error: false };
        case EDIT_POST + '_FULFILLED':
            return { ...state, posts: payload, error: false };
        case EDIT_POST + '_REJECTED':
            return { ...state, redirect: true, error: payload };
        case CREATE_POST + '_FULFILLED':
            return { posts: payload, redirect: false, error: false };
        case CREATE_POST + '_REJECTED':
            return { ...state, error: payload };
        default:
            return state;
    };
};