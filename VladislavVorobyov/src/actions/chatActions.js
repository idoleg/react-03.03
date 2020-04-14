import {createActions} from 'redux-actions';

export const {chats:{initChats, addChat}} = createActions({
    CHATS: {
        INIT_CHATS: () => ({}),
        ADD_CHAT: (title) => ({title}),
    },
});