import { createStore, combineReducers } from 'redux';
import {createBrowserHistory} from 'history';
import {routerMiddleware, connectRouter} from 'connected-react-router';

import chatReducer from './chatReducer.js';

export const history = createBrowserHistory();

const reducer = combineReducers({
    app: chatReducer,
    router: connectRouter(history),
});

export function initStore (preloadedState = undefined) {
    return createStore(
        reducer, preloadedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}