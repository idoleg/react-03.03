import {handleActions, combineActions} from 'redux-actions';
import {initChats, addChat, startFire, finishFire} from 'Actions/chatActions'


const initialStore = {};

export default handleActions({
    [initChats]: (store, action) => ({
        1: {title: 'Chat 1', fire: false},
        2: {title: 'Chat 2', fire: false},
        3: {title: 'Chat 3', fire: false},
    }),
    [addChat]: (store, action) => {

        const chatId = Object.keys(store).length + 1;
        return {
            ...store,
            [chatId]: {title:action.payload.title, fire:false},
        }

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
