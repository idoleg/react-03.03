import {createActions} from 'redux-actions';


export const {initProfileData,initChats, sendMessage, createNewChat} = createActions({
    INIT_PROFILE_DATA: () => ({}),
    INIT_CHATS: (chats) => ({chats}),
    SEND_MESSAGE: (id, name, content) => ({id, name, content}),
    CREATE_NEW_CHAT: (chats, id) =>({chats, id})

}) 