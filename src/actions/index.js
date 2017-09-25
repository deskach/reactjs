import axios from 'axios';


export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'key=deskach1234';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts?${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request, //redux-promise takes care about the Promise
    };
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts?${API_KEY}`, values)
        .then(_ => callback());

    return {
        type: CREATE_POST,
        payload: request, //redux-promise takes care about the Promise
    };
}
