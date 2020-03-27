import {createStore, applyMiddleware, compose} from 'redux';
import {createBrowserHistory} from "history";
import {routerMiddleware} from "connected-react-router";
import initReducer from 'Reducers';
import middlewares from 'Middlewares';

export const history = createBrowserHistory();

function initStore() {
    const initialStore = {};
    const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    return createStore(
        initReducer(history),
        initialStore,
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history),
                ...middlewares
            ),
        )
    );
}

export default initStore;
