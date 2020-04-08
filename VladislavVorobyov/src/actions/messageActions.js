import {createActions} from 'redux-actions';


export const {messages: {initMessages, sendMessage}} = createActions({
    MESSAGES: {
        INIT_MESSAGES: () => ({}),
        SEND_MESSAGE: (chatId, senderId, content) => ({
            chatId,
            senderId,
            content,
        })
    }
});