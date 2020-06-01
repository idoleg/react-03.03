import {createActions} from 'redux-actions';

export const {chats:{
    loadingChats,
    failedLoadedChats,
    initChats,
    addChat,
    removeChat,
    startFire,
    finishFire
}} = createActions({
    CHATS: {
        LOADING_CHATS: () => ({}),
        FAILED_LOADED_CHATS: (error) => ({error}),
        INIT_CHATS: (chats) => ({chats}),
        ADD_CHAT: (title) => ({title}),
        START_FIRE: (chatId) => ({chatId}),
        FINISH_FIRE: (chatId) => ({chatId}),
        REMOVE_CHAT: (chatId) => ({chatId}),
    },
});