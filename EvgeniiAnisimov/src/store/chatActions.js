import { createActions } from 'redux-actions';

// export const {initChats, sendMessage, createChat, addChat} = createActions({
export const {fire, unfire, loadingChats, failedLoadedChats, initChats, sendMessage, addChat} = createActions({
  LOADING_CHATS: () => ({}),
  FAILED_LOADED_CHATS: (error) => ({error}),
  INIT_CHATS: (chats) => ({chats}),
  SEND_MESSAGE: (id, name, content) => ({id, name, content}),
  // CREATE_CHAT: (name) => ({name}),
  ADD_CHAT: (id, name, botId) => ({id, name, botId}),
  FIRE: (id) => ({id}),
  UNFIRE: (id) => ({id}),
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
