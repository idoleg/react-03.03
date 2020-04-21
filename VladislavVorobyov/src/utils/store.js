import {createStore, applyMiddleware, compose} from 'redux';
import {createBrowserHistory} from "history";
import {routerMiddleware} from "connected-react-router";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import initReducer from 'Reducers';
import middlewares from 'Middlewares';

const persistConfig = {
    key: 'geekmessanger',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['chats', 'messages'],
};

export const history = createBrowserHistory();

function initStore() {
    const initialStore = {};
    const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    const store = createStore(
        persistReducer(persistConfig, initReducer(history)),
        initialStore,
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history),
                ...middlewares
            ),
        )
    );
    const persistor = persistStore(store);
    return {store, persistor};
}

export default initStore;
