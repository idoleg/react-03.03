import { createActions } from 'redux-actions';

// export const {initChats, sendMessage, createChat, addChat} = createActions({
export const {initChats, sendMessage, addChat} = createActions({
  INIT_CHATS: () => ({}),
  SEND_MESSAGE: (id, name, content) => ({id, name, content}),
  // CREATE_CHAT: (name) => ({name}),
  ADD_CHAT: (id, name) => ({id, name}),
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
