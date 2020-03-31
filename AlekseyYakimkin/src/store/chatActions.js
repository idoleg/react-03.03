//export const addChat = () => ({type: ADD_CHAT})
import {createActions} from 'redux-actions'

export const {loadingChats, failedLoadedChats, initChats, sendMessage, createChat, addNewChat, deleteChat} = createActions({
    LOADING_CHATS: () => ({}),
    FAILED_LOADED_CHATS: (error) => ({error}),
    INIT_CHATS: (chats) => ({chats}),
    SEND_MESSAGE: (id, name,content) => ({id, name,content}),
    //CREATE_CHAT: (name) => ({name}),
    ADD_NEW_CHAT: (id,name,botId) => ({id,name,botId}),
    DELETE_CHAT: (id) => ({id})
})