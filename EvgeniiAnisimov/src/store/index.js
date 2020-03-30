// import { createStore } from 'redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import chatReducer from './chatReducer';
import botMiddleware from './botMiddleware'
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import chatMiddleware from './chatMiddleware';
import ReduxThunk from 'redux-thunk';

// const reducer = function(store={counter: 0}, action) {
//   console.log("index->reducer", action);
  // console.log("reducer->action", action);
  // console.log("reducer->store", store);

  // switch(action.type){
  //   case "TEST": console.log("It's test action");
  // }
//   return {
//     ...store,
//     counter: store.counter + 1,
//   };
// }

export const history = createBrowserHistory();

const reducer = combineReducers({
  chats: chatReducer,
  router: connectRouter(history)
});

const composeEnhancers = (typeof window !== 'undefined'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export function initStore(preloaderState = undefined) {
  return createStore(
    reducer,
    preloaderState,
    composeEnhancers(
      applyMiddleware(
        ReduxThunk,
        routerMiddleware(history),
        botMiddleware,
        chatMiddleware
      ),
    )
  );
}
