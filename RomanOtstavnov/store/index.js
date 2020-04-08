import {createStore, combineReducers} from 'redux';
import chatReducer from './chatReducer';
import profileReducer from "./profileReducer";

const reducer = combineReducers({
    chat: chatReducer,
    profile: profileReducer
});

export function initStore (preloadedState = undefined) {
    return createStore(reducer, preloadedState)
}
