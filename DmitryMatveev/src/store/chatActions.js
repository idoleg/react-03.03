import {createActions} from 'redux-actions';

export const {initChats, sendMessage, addChat} = createActions({
    INIT_CHATS: () => ({}),
    SEND_MESSAGE: (id, name, text) => ({id, name, text}),
    ADD_CHAT: (id, name) => ({id, name}),
})