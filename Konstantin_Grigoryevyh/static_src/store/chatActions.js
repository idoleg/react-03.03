import {createActions} from 'redux-actions';

export const {initChats, sendMessage, addChat, fire, unfire} = createActions({
    INIT_CHATS: () => ({}),
    SEND_MESSAGE: (id, name, content) => ({id, name, content}),
    ADD_CHAT: (id, name) => ({id, name}),
    CHANGE_CHAT: (id) => ({id}),
    FIRE: (id) => ({id}),
    UNFIRE: (id) => ({id}),
})