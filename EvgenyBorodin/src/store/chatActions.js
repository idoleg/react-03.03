import {createActions} from 'redux-actions';

export const { initChats, sendMessage, addChat, updateProfile } = createActions({
    INIT_CHATS: () => ({}),
    SEND_MESSAGE: (id, user, text) => ({id, user, text}),
    ADD_CHAT: (name) => ({name}),
    UPDATE_PROFILE: (profile) => ({profile}),
})