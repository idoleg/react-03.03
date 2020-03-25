import { handleActions } from 'redux-actions';
import { initChats, sendMessage } from './chatActions';

const initialState = {
    chats: {},
};

export default handleActions({
  [initChats]: (store, action) => {
    // console.log("chatReducer->[initChats]->action", action);
    return {
      chats: {
        1: {
          name: 'Chat 1',
          messages: [
            {name: "Ivan", content: "Hello in Chat 1, Petr"},
            {name: "Petr", content: "Hello, how are you?"},
            {name: "Ivan", content: "I'm well"}
          ]
        },
        2: {
          name: 'Chat 2',
          messages: [
            {name: "Sergey", content: "Hello in Chat 2, Petr"},
            {name: "Petr", content: "Hello, how are you?"},
            {name: "Sergey", content: "I'm well"}
          ]
        },
        3: {
          name: 'Chat 3',
          messages: []
        }
      }
    }
  },
  [sendMessage]: (store, action) => {
    console.log("chatReducer->[sendMessage]->action", action);
    return store;
  }
}, initialState)
