import { createStore, combineReducers } from 'redux';
import chatReducer from './ChatReducer';

const reducer = combineReducers({
    chats: chatReducer
})


export function initStore(preloadedState = undefined) {
    return createStore(reducer, preloadedState)
}