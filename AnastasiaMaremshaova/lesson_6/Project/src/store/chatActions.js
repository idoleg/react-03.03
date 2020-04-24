import {createActions} from 'redux-actions';


export const {loadingChats, failedLoadedChats, initProfileData, initChats, sendMessage, 
    saveChangesProfileData, addChat, deleteChat, saveNameChat,
     fire, unfire, setFill, deleteFill, savePrevId, openEditNameChat, exitEditNameChat}= createActions({

    LOADING_CHATS: () => ({}),
    FAILED_LOADED_CHATS: (error) => ({error}),
    INIT_PROFILE_DATA: () => ({}),
    INIT_CHATS: (chats) => ({chats}),
    SEND_MESSAGE: (id, name, content) => ({id, name, content}),
    SAVE_CHANGES_PROFILE_DATA: (name)=>({name}),
    ADD_CHAT: (id, name, botId) => ({id, name, botId}),
    DELETE_CHAT: (id) => ({id}),
    SAVE_NAME_CHAT: (id, nameChat)=>({id, nameChat}),
    FIRE: (id) => ({id}),
    UNFIRE: (id) => ({id}),
    SET_FILL: (id) => ({id}),
    DELETE_FILL: (id) => ({id}),
    SAVE_PREV_ID: (id) => ({id}),
    OPEN_EDIT_NAME_CHAT: ()=>({}),
    EXIT_EDIT_NAME_CHAT: ()=>({}) 
}) 
