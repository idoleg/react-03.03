import {createStore, combineReducers} from 'redux'

import chatReducer from './chatReducer'; 
const reducer = combineReducers({chats: chatReducer}); 

export function initStore (preloadedStore = {}){
    return createStore(reducer, preloadedStore);

}