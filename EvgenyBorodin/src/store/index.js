import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import chatReducer from './chatReducer.js';
import botMiddleware from './botMiddleware.js'
import chatMiddleware from './chatMiddleware.js'

export const history = createBrowserHistory();

const persistConfig = {
    key: 'geekmessenger',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['chatReducer'],
};
 
const reducer = combineReducers({
    app: chatReducer,
    router: connectRouter(history),
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export function initStore (preloadedState = {}) {
    let store = createStore(
        persistReducer(persistConfig,reducer),
        preloadedState,
        composeEnhancers(applyMiddleware(
            ReduxThunk,
            routerMiddleware(history),
            botMiddleware,
            chatMiddleware
            ))
    )
    let persistor = persistStore(store)
    return { store, persistor }
}