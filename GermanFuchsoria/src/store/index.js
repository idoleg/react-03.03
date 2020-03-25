import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import chatReducer from './chatReducer';
import profileReducer from './profileReducer';
import blinkReducer from './blinkReducer';
import botMiddleware from './botMiddleware';
import chatMiddleware from './chatMiddleware';

export const history = createBrowserHistory();

const persistConfig = {
  key: 'reactmessenger',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['chats', 'profile'],
};

const reducer = combineReducers({
  chats: chatReducer,
  profile: profileReducer,
  blink: blinkReducer,
  router: connectRouter(history)
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export function initStore(preloadedState = undefined) {
  const store = createStore(
    persistReducer(persistConfig, reducer),
    preloadedState,
    composeEnhancers(applyMiddleware(ReduxThunk, routerMiddleware(history), botMiddleware, chatMiddleware))
  );
  const persistor = persistStore(store);

  return { store, persistor };
}
