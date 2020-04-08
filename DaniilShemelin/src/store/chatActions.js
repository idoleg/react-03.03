import { createActions } from 'redux-actions';

export const {initChats, sendMessage, addChat} = createActions({
  INIT_CHATS: () => ({}),
  SEND_MESSAGE: (id, name, content) => ({id, name, content}),
  ADD_CHAT: (name) => ({name}),
})