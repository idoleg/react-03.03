import {createActions} from 'redux-actions';

export const { initChats, sendMessage, addChat, updateProfile, selectChat, fireChat, unfireChat } = createActions({
    INIT_CHATS: () => ({}),
    SEND_MESSAGE: (id, user, text) => ({id, user, text}),
    ADD_CHAT: (name) => ({name}),
    UPDATE_PROFILE: (profile) => ({profile}),
    SELECT_CHAT: (id) => ({id}),
    FIRE_CHAT: (id) => ({id}),
    UNFIRE_CHAT: (id) => ({id}),
})