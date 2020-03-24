import { createStore } from 'redux';

const reducer = function(store={counter: 0}, action) {
  console.log("reducer->action", action);
  console.log("reducer->store", store);
  console.log(action);
  // switch(action.type){
  //   case "TEST": console.log("It's test action");
  // }
  return {
    ...store,
    counter: store.counter + 1,
  };
}

export function initStore(preloaderState = undefined) {
  return createStore(reducer, preloaderState);
}
