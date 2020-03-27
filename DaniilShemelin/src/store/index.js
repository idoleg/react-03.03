import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import chatReducer from './chatReducers'
import { botAnswer } from './middlewares'


const reducer = combineReducers({
  chats: chatReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export function initStore(preloadedState = {}) {
  return createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(botAnswer)));
}