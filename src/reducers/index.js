import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';

const allReducers = combineReducers({
    posts: PostsReducer
});

export default allReducers;

