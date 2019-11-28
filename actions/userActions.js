import {USER_LOADED,  USER_LOG_OUT} from './types';

export const userLoaded=(data)=>{
   return{
        type:USER_LOADED,
        payload:data
    }
};

export const userLogout=()=>{
    return{
        type:USER_LOG_OUT,
    }
};

