import { createStore, combineReducers } from 'redux';
import chatReducer from '~/store/reducers/chatReducer'

const reducer = combineReducers({
    chat: chatReducer,
})

export function initStore(preloadedState = {}) {
    return createStore(
        reducer,
        preloadedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ ?
            window.__REDUX_DEVTOOLS_EXTENSION__() : () => { });
}