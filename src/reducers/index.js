import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './posts_reducer';

const allReducers = combineReducers({
    posts: PostsReducer,
    form: formReducer
});

export default allReducers;

