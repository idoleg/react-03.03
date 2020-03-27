import {createStore, applyMiddleware, compose} from 'redux';
import initReducer from 'Reducers';
import middlewares from 'Middlewares';

function initStore() {
    const initialStore = {};
    const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    return createStore(
        initReducer,
        composeEnhancers(
            applyMiddleware(...middlewares),
        )
    );
}

export default initStore;
