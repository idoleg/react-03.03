import {createActions} from 'redux-actions';


const actions = createActions({
    '@@messages': {
        LOADING_MESSAGES: () => ({}),
        FAILED_LOADED_MESSAGES: () =>({}),
        INIT_MESSAGES: () =>({}),
        SEND_MESSAGE: (chatId, senderId, content) => ({
            chatId,
            senderId,
            content,
        })
    }
});
export const {
    loadingMessages,
    failedLoadedMessages,
    initMessages,
    sendMessage,
} = actions.messages;