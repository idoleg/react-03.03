import {createStore, combineReducers,compose,applyMiddleware} from 'redux'
import chatReducer from './chatReducer'
import {botAnswer} from './middlewares'
import {createBrowserHistory} from 'history'
import {routerMiddleware, connectRouter} from 'connected-react-router'

export const history = createBrowserHistory()

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = combineReducers({
    chats: chatReducer,
    router: connectRouter(history)
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
    return createStore(reducer, preloadedState,composeEnhancers(applyMiddleware(routerMiddleware(history), botAnswer)))
}