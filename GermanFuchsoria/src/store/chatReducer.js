import { handleActions } from 'redux-actions';
import { initChats, sendMessage, addChat, deleteChat, deleteMessage } from './chatActions';

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
    },
    [deleteChat]: (store, action) => {
      const id = action.payload;
      const array = Object.entries(store);
      const filtered = array.filter(([chatId, chat]) => chatId !== id);
      const result = filtered.map((item) => item[item[0]] = item[1]);

      return { ...result };
    },
    [deleteMessage]: (store, action) => {
      const { messageId, id } = action.payload;
      const currentChat = store[id];
      const { messages } = currentChat;
      const filteredMessages = messages.filter(message => message.messageId !== messageId || !message.messageId);

      return { ...store, [id]: { ...currentChat, messages: filteredMessages } };
    }
  },
  initialState
);
