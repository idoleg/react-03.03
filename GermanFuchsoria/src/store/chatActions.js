import { createActions } from 'redux-actions';

export const { initChats, sendMessage, addChat, deleteChat, deleteMessage } = createActions({
  INIT_CHATS: chats => chats,
  SEND_MESSAGE: ({ id, message }) => ({ id, message }),
  ADD_CHAT: ({ id, title }) => ({ id, title }),
  DELETE_CHAT: id => id,
  DELETE_MESSAGE: ({ messageId, id }) => ({ messageId, id })
});
