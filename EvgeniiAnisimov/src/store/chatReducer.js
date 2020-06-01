import { handleActions } from 'redux-actions';
import { fire, unfire, loadingChats, failedLoadedChats, initChats, sendMessage, addChat } from './chatActions';

const initialState = {
    chats: {},
    isLoading: false,
    error: null,
};

export default handleActions({
  [loadingChats]: (store, action) => {
    return {
      ...store,
      isLoading: true,
    };
  },
  [failedLoadedChats]: (store, action) => {
    return {
      ...store,
      isLoading: false,
      error: action.payload.error,
    };
  },
  [initChats]: (store, action) => {
    // console.log("chatReducer->[initChats]->action", action);
    return {
      ...store,
      isLoading: false,
      // chats: action.payload.chats,
      chats: action.payload,
    }
      // {
      //   1: {
      //     name: 'Chat 1',
      //     messages: [
      //       {name: "Ivan", content: "Hello in Chat 1, Petr"},
      //       {name: "Petr", content: "Hello, how are you?"},
      //       {name: "Ivan", content: "I'm well"}
      //     ]
      //   },
      //   2: {
      //     name: 'Chat 2',
      //     messages: [
      //       {name: "Sergey", content: "Hello in Chat 2, Petr"},
      //       {name: "Petr", content: "Hello, how are you?"},
      //       {name: "Sergey", content: "I'm well"}
      //     ]
      //   },
      //   3: {
      //     name: 'Chat 3',
      //     messages: []
      //   }
      // }
  },
  [sendMessage]: (store, action) => {
    // console.log("chatReducer->[sendMessage]->action", action);
    const {id, name, content} =  action.payload;

    return {
      ...store,
      chats: {
        ...store.chats,
        [id]: {
          ...store.chats[id],
          messages: [
            ...store.chats[id].messages,
            {name, content},
          ]
        }
      }
    };
  },
  [addChat]: (store, action) => {
    const {id, name, botId} = action.payload;

    return {
      ...store,
      chats: {
        ...store.chats,
        [id]: {
          name,
          fire: false,
          botId,
          messages: [],
        }
      }
    };
  },
  [fire]: (store, action) => {
    const {id} = action.payload;

    return {
      ...store,
      chats: {
        ...store.chats,
        [id]: {
          ...store.chats[id],
          fire: true,
        }
      }
    };
  },
  [unfire]: (store, action) => {
    const {id} = action.payload;

    return {
      ...store,
      chats: {
        ...store.chats,
        [id]: {
          ...store.chats[id],
          fire: false,
        }
      }
    };
  }
}, initialState)
