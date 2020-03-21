import { handleActions } from 'redux-actions';
import { initChats, sendMessage, addChat } from './chatActions';

const initialState = {};

export default handleActions(
  {
    [initChats]: (store, action) => {
      const chats = action.payload;

      return chats;
    },
    [sendMessage]: (store, action) => {
      const { id, message } = action.payload;
      const currentChat = store[id];
      const { messages } = currentChat;

      return { ...store, [id]: { ...currentChat, messages: [...messages, message] } };
    },
    [addChat]: (store, action) => {
      const { id, title } = action.payload;

      return { ...store, [id]: { chatTitle: title, messages: [] } };
    }
  },
  initialState
);
