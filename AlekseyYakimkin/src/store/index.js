import {createStore, combineReducers} from 'redux'
import chatReducer from './chatReducer'

const reducer = combineReducers({
    chats: chatReducer
});

// const reducer = function(store = {counter:1},action) {
//     console.log('action', action)
//     // switch(action.type){
//     //     case "TEST" : console.log("this is action TEST")
//     // }
//     return {
//         ...store,
//         counter: store.counter + 1
//     }
// }

export function initStore (preloadedState = undefined){
    return createStore(reducer, preloadedState)
}