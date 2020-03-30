import {createStore, applyMiddleware, compose} from 'redux';
import {initReducers} from "./Reducers";
import middlewares from "./middlewares/Middlewares";

export function initStore(preloadedState = undefined) {
   return createStore(
      initReducers,
      preloadedState,
      compose(
         applyMiddleware(...middlewares),
         window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {}
      )
   )
}
