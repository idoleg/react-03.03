import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import chatReducer from './chatReducer';
import botMiddleware from './botMiddleware';
import chatMiddleware from './chatMiddleware';
import {createBrowserHistory} from 'history';
import {routerMiddleware, connectRouter} from 'connected-react-router';
import ReduxThunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware';

export const history = createBrowserHistory();

const reducer = combineReducers({
    chats: chatReducer,
    router: connectRouter(history),
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export function initStore (preloadedState = undefined) {
    return createStore(
        reducer, 
        preloadedState, 
        composeEnhancers(applyMiddleware(
            ReduxThunk,
            apiMiddleware,
            routerMiddleware(history), 
            botMiddleware, 
            chatMiddleware
            ))
    )
}