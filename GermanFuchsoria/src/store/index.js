import { createStore, combineReducers } from 'redux';
import chatReducer from './chatReducer';
import profileReducer from './profileReducer';

const reducer = combineReducers({
  chats: chatReducer,
  profile: profileReducer
});

export function initStore(preloadedState = undefined) {
  return createStore(
    reducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
