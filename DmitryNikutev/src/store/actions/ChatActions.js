import {createActions} from 'redux-actions';

export const {setChats, addMessage, addChat} = createActions({
   SET_CHATS: (chats) => ({chats}),
   ADD_MESSAGE: (id, name, content, automated, chat) => ({id, name, content, automated, chat}),
   ADD_CHAT: (id, name, avatar) => ({id, name, avatar})
});
