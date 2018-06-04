import { combineReducers } from 'redux';
import PostListReducer from './postListReducer';

const rootReducer = combineReducers({
  display: PostListReducer
});

export default rootReducer;