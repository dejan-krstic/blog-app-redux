import { url, imageUrl } from '../constants/constants'
import "babel-polyfill";
import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const SINGLE_POST = 'FETCH_POST';
export const SINGLE_AUTHOR = 'FETCH_AUTHOR';
export const DELETE_POST = 'DELETE_POST';
export const GET_AUTHORS = 'GET_AUTHORS';


export const getPosts = () => {
    let payload = axios.get(`${url}posts/`);
    return {
        type: FETCH_POSTS,
        payload
    };
}

export const getPostById = async (postId) => {
    let response = await axios.get(`${url}posts/${postId}`);
    const postData = response.data;
    response = await axios.get(`${url}users/${postData.userId}`);
    const authorName = response.data.name;
    response = await axios.get(`${url}posts?userId=${postData.userId}`);
    response.data.splice(3);
    const sameAuthorPosts = response.data;
    console.log(sameAuthorPosts);
    return {
        type: SINGLE_POST,
        payload: { postData, authorName, sameAuthorPosts }
    }
}


export const getAuthors = async () => {
    const authors = await axios.get(`${url}users/`);
    const authorPosts = await axios.all(authors.data.map(author => axios.get(`${url}posts?userId=${author.id}`)))
    return { type: GET_AUTHORS, payload: { authors, authorPosts } }
}


// redux thunk version 

// export const getAuthors = () => {
//     const request = axios.get(`${url}users`);
//     console.log("request index actions ", );
//     return (dispatch) => {
//         console.log("request index actions ", request);
//         request.then(response => {
//                 console.log("request index actions response ", response);
//                 const payload = response.data.map(author => axios.get(`${url}posts?userId=${author.id}`))
//                 dispatch({
//                     type: GET_AUTHORS,
//                     payload
//                 })
//             })
//         }
//     }

export const getAuthorById = async (authorId) => {
    const [authorData, authorImage] = await axios.all([axios.get(`${url}users/${authorId}`), axios.get(`${imageUrl}`)]);
    return {
        type: SINGLE_AUTHOR,
        payload: { authorData, authorImage }
    }
}
const postData = (url, title, body, config) => {
    axios({
        method: 'post',
        url: url + config,
        data: {
            'title': title,
            'body': body,
        },
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}

export function createPost(props) {
    console.log(props);
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

    return {
        type: CREATE_POST,
        payload: request
    };
}





