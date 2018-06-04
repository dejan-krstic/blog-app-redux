import { combineReducers } from 'redux';
import PostListReducer from './postListReducer';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  display: PostListReducer,
  form: formReducer
});

export default rootReducer;