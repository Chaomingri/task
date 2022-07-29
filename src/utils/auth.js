import {setStore,getStore,removeStore} from "@/utils/localStore";

const TokenKey = 'Token';

export const setToken=(token)=>{
    return setStore(TokenKey,token);
}

export const getToken=(token)=>{
    return getStore(TokenKey);
}

export const removeToken=()=>{
    return removeStore(TokenKey);
}