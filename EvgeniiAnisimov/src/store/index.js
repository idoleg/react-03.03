// import { createStore } from 'redux';
import { createStore, combineReducers } from 'redux';
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

export function initStore(preloaderState = undefined) {
  return createStore(reducer, preloaderState);
}
