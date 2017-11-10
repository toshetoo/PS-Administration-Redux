import {combineReducers} from 'redux';
import courseReducer from './CourseReducer';
import authorReducer from './AuthorReducer';

const rootReducer = combineReducers({
    courseReducer, authorReducer
});

export default rootReducer;