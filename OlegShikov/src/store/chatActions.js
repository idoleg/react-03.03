import {createActions} from 'redux-actions';

export const {initChats, sendMessage, addChat} = createActions({
    INIT_CHATS: () => ({}),
    SEND_MESSAGE: (id, name, content) => ({id, name, content}),
    // CREATE_CHAT: (name) => ({name}),
    ADD_CHAT: (id, name) => ({id, name}),
})