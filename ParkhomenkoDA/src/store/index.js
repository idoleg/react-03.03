import {createStore, combineReducers} from 'redux';
import chatReducer from './chatReducer';

const reducer = combineReducers({
    chats: chatReducer
});

export function initStore (preloadedState = undefined) {
    return createStore(reducer, preloadedState)
}