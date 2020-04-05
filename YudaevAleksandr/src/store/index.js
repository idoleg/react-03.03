import {createStore, combineReducers} from 'redux';
import chatReducer from "./chatReducer";

const reducer = combineReducers({
    chats: chatReducer
});

// const reducer = (store, action) => {
//     console.log('store', store);
//     console.log('action', action);
//     return {
//         ...store
//     };
// };

export function initStore(preloadedState = {}) {
    return createStore(reducer, preloadedState)
}