import { FETCH_POSTS, SINGLE_POST, DELETE_POST, GET_AUTHORS, SINGLE_AUTHOR } from '../actions/index';
import Post from '../entities/Post'
import Author from "../entities/Author"
import SinglePost from "../entities/SinglePost"
import { Name, Address, Company } from '../entities/SingleAuthor'


const INITIAL_STATE = { postList: [], authors: [], singlePost: {}, singleAuthor: {} }

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case FETCH_POSTS:
            const postList = action.payload.data.map(post => new Post(post.title, post.body, post.id, post.authorId));
            return { ...state, postList }
        case GET_AUTHORS:
        console.log(action.payload);
            const authors = action.payload.authors.data.map((author, i) => new Author(author.name, author.id, action.payload.authorPosts[i].data))
            return { ...state, authors }
        case SINGLE_POST:
            const { postData, authorName, sameAuthorPosts } = action.payload
            const singlePost = new SinglePost(postData.title, postData.body, authorName, postData.userId, sameAuthorPosts);
            return { ...state, singlePost }
        case SINGLE_AUTHOR:
            const { authorImage, authorData } = action.payload
            const singleAuthor = {
                name: new Name(authorImage.data.results[0].picture.large, authorData.data.name, authorData.data.username, authorData.data.email, authorData.data.phone),
                address: new Address(authorData.data.address.street, authorData.data.address.city, authorData.data.address.zipcode, authorData.data.address.geo.lat, authorData.data.address.geo.lng),
                company: new Company(authorData.data.company.name, authorData.data.company.catchPhrase)
            }
            return {...state, singleAuthor}
        default:
            return state;
    }
    return state;
}
