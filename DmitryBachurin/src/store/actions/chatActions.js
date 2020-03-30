import {createActions} from 'redux-actions';

export const {initChats, sendMessage} = createActions({
    INIT_CHATS: () => ({}),
    SEND_MESSAGE: (chatId, name, content) => ({chatId, name, content})
})