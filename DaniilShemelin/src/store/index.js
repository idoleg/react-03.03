import { createStore, combineReducers } from 'redux';
import chatReducer from './chatReducers'


const reducer = combineReducers({
  chats: chatReducer
});

export function initStore(preloadedState = {}) {
  return createStore(reducer, preloadedState);
}