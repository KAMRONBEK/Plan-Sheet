import {combineReducers} from 'redux';
import user from './userReducer';
import userLogout from './userReducer';

export default combineReducers({
    user
});

