import { createActions } from 'redux-actions';

export const {initChats, sendMessage} = createActions({
  INIT_CHATS: () => ({}),
  SEND_MESSAGE: (name, content) => ({name, content}),
})

// const test = createActions({
//   INIT_CHATS: () => ({}),
//   SEND_MESSAGE: (name, content) => ({name, content}),
// })
//
// console.log("cheateAction->test", test);
//
// export const {initChats, sendMessage} = test;

// export const addChat = () => ({
//   type: "ADD_CHAT"
// })
