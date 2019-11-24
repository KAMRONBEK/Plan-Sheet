import {USER_LOADED, REMOVE_ALL, REMOVE_ITEM, SET_COUNT} from '../actions/types';
import {AsyncStorage} from 'react-native';

const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADED:
            console.warn(action);
            AsyncStorage.setItem('token', action.payload);
            return {token: action.payload};
        default:
            return state;
    }
}
