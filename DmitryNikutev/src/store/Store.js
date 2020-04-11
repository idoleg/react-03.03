import {createStore} from 'redux';
import {initReducers} from "./Reducers";

export function initStore (preloadedState = undefined) {
   return createStore(initReducers, preloadedState)
}
