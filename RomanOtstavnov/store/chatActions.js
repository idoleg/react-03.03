import {createActions} from 'redux-actions';

export const {initChats, loadData, addMessage, addChat} = createActions({
    INIT_CHATS: () => ({}),
    LOAD_DATA: (chats) => ({chats}),
    ADD_MESSAGE: (chatId, name, content, type) => ({chatId, name, content, type}),
    ADD_CHAT: (name) => ({name}),
});
