import {handleActions, combineActions} from 'redux-actions';
import {initChats, addChat, removeChat, startFire, finishFire} from 'Actions/chatActions'


const initialStore = {};

export default handleActions({
    [initChats]: (store, action) => ({
        1: {title: 'Chat 1', fire: false},
        2: {title: 'Chat 2', fire: false},
        3: {title: 'Chat 3', fire: false},
    }),
    [addChat]: (store, action) => {
        const chatsIds = Object.keys(store);
        const chatId = parseInt(chatsIds[chatsIds.length-1])+1
        return {
            ...store,
            [chatId]: {title:action.payload.title, fire:false},
        }

    },
    [removeChat]: (store, action) => {
        const {chatId} = action.payload;
        const newStore = {...store};
        delete newStore[chatId];
        return newStore;
    },
    [combineActions(startFire, finishFire)]: (store, action) => {
        const {chatId} = action.payload;
        return {
            ...store,
            [chatId]: {
                title: store[chatId].title,
                fire: action.type === startFire.toString(),
            }
        }
    },
}, initialStore);
