import { createActions } from 'redux-actions';

export const { initChats, sendMessage, addChat } = createActions({
  INIT_CHATS: chats => chats,
  SEND_MESSAGE: ({id, message}) => ({ id, message }),
  ADD_CHAT: ({id, title}) => ({ id, title })
});
