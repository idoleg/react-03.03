//export const addChat = () => ({type: ADD_CHAT})
import {createActions} from 'redux-actions'

export const {initChats, sendMessage, createChat, addNewChat, deleteChat} = createActions({
    INIT_CHATS: () => ({}),
    SEND_MESSAGE: (id, name,content) => ({id, name,content}),
    //CREATE_CHAT: (name) => ({name}),
    ADD_NEW_CHAT: (id,name) => ({id,name}),
    DELETE_CHAT: (id) => ({id})
})