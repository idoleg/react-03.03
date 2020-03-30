import {createActions} from 'redux-actions';

export const {initChats, addMessage, addChat} = createActions({
   INIT_CHATS: () => ({}),
   ADD_MESSAGE: (id, name, content, automated, chat) => ({id, name, content, automated, chat}),
   ADD_CHAT: (id, name, avatar) => ({id, name, avatar})
});
