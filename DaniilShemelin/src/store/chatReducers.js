import { handleActions } from 'redux-actions';
import { initChats, sendMessage, addChat } from './chatActions';


const initialState = {}

export default handleActions({
  [initChats]: (store, action) => {
    return {
      1: {
        name: 'Chat 1',
        messages: [
          { name: "Ivan", content: "Hi!" },
          { name: "Oleg", content: "Hello!" },
          { name: "Ivan", content: "How are you?" },
        ],
      },
      2: {
        name: 'Chat 2',
        messages: [
          { name: "Ivan", content: "Mda" },
          { name: "Oleg", content: "Hello!" },
          { name: "Daniil", content: "Test2" },
        ],
      },
      3: {
        name: 'Chat 3',
        messages: [],
      }
    }
  },
  [sendMessage]: (store, action) => {
    const {id, name, content} = action.payload;

    return {
      ...store,
      [id]: {
        ...store[id],
        messages: [
          ...store[id].messages,
          {name, content}
        ]
      }
    }
  },
  [addChat]: (store, action) => {
    const {name} = action.payload;

    return {
      ...store,
      [name]: {
        name,
        messages: []
      }
    }
  }
}, initialState)