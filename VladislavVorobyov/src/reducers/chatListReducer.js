import {handleActions, combineActions} from 'redux-actions';
import {initChats, addChat, removeChat, startFire, finishFire} from 'Actions/chatActions'


const initialStore = [];

export default handleActions({
    [initChats]: (store, action) => ([
        {id: "1", title: 'Chat 1', fire: false},
        {id: "2", title: 'Chat 2', fire: false},
        {id: "3", title: 'Chat 3', fire: false},
    ]),
    [addChat]: (store, action) => {
        const chatsIds = Object.keys(store);
        const chatId = parseInt(chatsIds[chatsIds.length-1])+1;
        return [
            ...store,
            {id: chatId.toString(), title:action.payload.title, fire:false},
        ]

    },
    [removeChat]: (store, action) => {
        const {chatId} = action.payload;
        return store.filter(chat => chat.id !== chatId);
    },
    [combineActions(startFire, finishFire)]: (store, action) => {
        const {chatId} = action.payload;
        const chat = store.find(chat => chat.id === chatId);
        return [
            {
                ...chat,
                fire: action.type === startFire.toString()
            },
            ...store.filter(chat => chat.id !== chatId),

        ]
    },
}, initialStore);
