import {handleActions} from 'redux-actions';
import {initMessages, sendMessage} from "Actions/messageActions";


const initialStore = [];

export default handleActions({
    [initMessages]: (store, action) => ([
        {id: 1, chatId: "1", senderId: 1, content: "Hello, world"},
        {id: 2, chatId: "1", senderId: 2, content: "Hello, Vladislav"},
    ]),
    [sendMessage]: (store, action) => {
        const messageId = Object.keys(store).length + 1;
        const {chatId, senderId, content} = action.payload;
        return [
            ...store,
            {...action.payload, id: messageId},
        ]
    },
}, initialStore);