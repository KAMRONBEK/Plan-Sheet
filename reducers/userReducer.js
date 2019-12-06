import {USER_LOADED, USER_LOG_OUT, REMOVE_ITEM, SET_COUNT} from '../actions/types';
import {AsyncStorage} from 'react-native';

const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADED:
            console.warn(action);
            AsyncStorage.setItem('token', action.payload);
            return {token: action.payload};
        case USER_LOG_OUT:
            console.warn(action);
            AsyncStorage.removeItem('token');
            return {token: null};
        default:
            return state;
    }
}
