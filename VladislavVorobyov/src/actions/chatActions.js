import {createActions} from 'redux-actions';

export const {chats:{initChats, addChat, startFire, finishFire}} = createActions({
    CHATS: {
        INIT_CHATS: () => ({}),
        ADD_CHAT: (title) => ({title}),
        START_FIRE: (chatId) => ({chatId}),
        FINISH_FIRE: (chatId) => ({chatId}),
    },
});