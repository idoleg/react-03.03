import {createActions} from 'redux-actions';


export const {initProfileData, initChats, sendMessage, saveChangesProfileData, addChat} = createActions({
    INIT_PROFILE_DATA: () => ({}),
    INIT_CHATS: (chats) => ({chats}),
    SEND_MESSAGE: (id, name, content) => ({id, name, content}),
    SAVE_CHANGES_PROFILE_DATA: (name)=>({name}),
    ADD_CHAT: (id, name) => ({id, name})
}) 
