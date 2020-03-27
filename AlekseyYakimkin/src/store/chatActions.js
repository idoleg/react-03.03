//export const addChat = () => ({type: ADD_CHAT})
import {createActions} from 'redux-actions'

export const {initChats, sendMessage, addNewChat} = createActions({
    INIT_CHATS: () => ({}),
    SEND_MESSAGE: (id, name,content) => ({id, name,content}),
  
    ADD_NEW_CHAT: (name) => ({name})
})