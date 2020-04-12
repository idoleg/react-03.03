import {createActions} from 'redux-actions';

export const {loadingChats, failedLoadedChats, initChats, sendMessage, addChat, fire, unfire} = createActions({
    INIT_CHATS: (chats) => ({chats}),
    SEND_MESSAGE: (id, name, content) => ({id, name, content}),
    ADD_CHAT: (id, name) => ({id, name}),
    CHANGE_CHAT: (id) => ({id}),
    FIRE: (id) => ({id}),
    UNFIRE: (id) => ({id}),
    LOADING_CHATS: () => ({}),
    FAILED_LOADED_CHATS: (error) => ({error})
})