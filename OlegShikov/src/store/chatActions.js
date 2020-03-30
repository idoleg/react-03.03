import {createActions} from 'redux-actions';

export const {loadingChats, failedLoadedChats, initChats, sendMessage, addChat, fire, unfire} = createActions({
    LOADING_CHATS: () => ({}),
    FAILED_LOADED_CHATS: (error) => ({error}),
    INIT_CHATS: (chats) => ({chats}),
    SEND_MESSAGE: (id, name, content) => ({id, name, content}),
    // CREATE_CHAT: (name) => ({name}),
    ADD_CHAT: (id, name, botId) => ({id, name, botId}),
    FIRE: (id) => ({id}),
    UNFIRE: (id) => ({id}),
})