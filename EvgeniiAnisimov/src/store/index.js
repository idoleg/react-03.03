// import { createStore } from 'redux';
import { createStore, combineReducers, compose } from 'redux';
import chatReducer from './chatReducer';

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

const reducer = combineReducers({
  chats: chatReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export function initStore(preloaderState = undefined) {
  return createStore(reducer, preloaderState, composeEnhancers());
}
