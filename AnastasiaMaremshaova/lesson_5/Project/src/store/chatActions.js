import {createActions} from 'redux-actions';


export const {initChats, sendMessage, createNewChat} = createActions({
    INIT_CHATS: (chats) => ({chats}),
    SEND_MESSAGE: (id, name, content) => ({id, name, content}),
    CREATE_NEW_CHAT: (chats) =>({chats})

}) 