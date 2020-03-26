import {createStore, combineReducers, compose} from 'redux';
import chatReducer from './chatReducer';

const reducer = combineReducers({
    chats: chatReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export function initStore (preloadedState = undefined) {
    return createStore(reducer, preloadedState,composeEnhancers())
}