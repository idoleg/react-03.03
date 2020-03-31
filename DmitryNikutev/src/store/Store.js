import {createStore, applyMiddleware, compose} from 'redux';
import {initReducers} from "./Reducers";
import middlewares from "./middlewares/Middlewares";


const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export function initStore(preloadedState = undefined) {
   return createStore(
      initReducers,
      preloadedState,
      composeEnhancers(applyMiddleware(...middlewares)),
   )
}
