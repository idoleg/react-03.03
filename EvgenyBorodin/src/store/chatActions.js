import {createActions} from 'redux-actions';

export const { loadingChats, failedLoadedChats, initChats, sendMessage, addChat, renameChat, updateProfile, selectChat, deselectChat, fireChat, unfireChat, deleteChat } = createActions({
    LOADING_CHATS: () => ({}),
    FAILED_LOADED_CHATS: (error) => ({error}),
    INIT_CHATS: (chats) => ({chats}),
    SEND_MESSAGE: (id, user, text) => ({id, user, text}),
    ADD_CHAT: (name) => ({name}),
    RENAME_CHAT: (id, name) => ({id, name}),
    UPDATE_PROFILE: (profile) => ({profile}),
    SELECT_CHAT: (id) => ({id}),
    DESELECT_CHAT: () => ({}),
    FIRE_CHAT: (id) => ({id}),
    UNFIRE_CHAT: (id) => ({id}),
    DELETE_CHAT: (id) => ({id}),
})