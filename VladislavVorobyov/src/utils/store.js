import {createStore} from 'redux';
import initReducer from 'Reducers';

function initStore() {
    const initialStore = {};

    return createStore(
        initReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
}

export default initStore;
