import {USER_LOADED, REMOVE_ALL, REMOVE_ITEM, SET_COUNT} from './types';

export const userLoaded=(data)=>{
   return{
        type:USER_LOADED,
        payload:data
    }
};
