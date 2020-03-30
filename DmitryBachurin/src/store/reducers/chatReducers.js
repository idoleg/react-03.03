
import { handleActions } from 'redux-actions';
import { initChats, sendMessage } from '~/store/actions/chatActions';


const initalState = {}

export default handleActions({

    [initChats]: (store, action) => {
        return {
            chats: [
                { id: 1, title: 'Чат 1', messagesArray: [1, 2, 3] },
                { id: 2, title: 'Чат 2', messagesArray: [4, 5, 6] },
                { id: 3, title: 'Чат 3', messagesArray: [7, 8, 9] },

            ],
            messages: [
                { id: 1, name: "Ivan", content: "Привет в чате 1" },
                { id: 2, name: "Petr", content: "И тебе привет в чате 1" },
                { id: 3, name: "Ivan", content: "Отлично!" },
                { id: 4, name: "Ivan", content: "Привет в чате 2" },
                { id: 5, name: "Petr", content: "И тебе привет в чате 2" },
                { id: 6, name: "Ivan", content: "Отлично!" },
                { id: 7, name: "Ivan", content: "Привет в чате 3" },
                { id: 8, name: "Petr", content: "И тебе привет в чате 3" },
                { id: 9, name: "Ivan", content: "Отлично!" },
            ],
        }
    },

    [sendMessage]: (store, action) => {

        const {chatId, name, content} = action.payload;
        const messageId = store.messages.length + 1;
        const filteredChats = store.chats.filter((el) => {
            return el.id !== +chatId;
        });
        
        const updatedChat = store.chats.find(item => item.id === +chatId);

        updatedChat.messagesArray.push(messageId);
        filteredChats.push(updatedChat);
        filteredChats.sort((a, b) => a.id > b.id ? 1 : -1);
        return {
            chats: filteredChats,

            messages: [
                ...store.messages,
                { id: messageId, name: name, content: content }
            ]
        }
    }

}, initalState)


