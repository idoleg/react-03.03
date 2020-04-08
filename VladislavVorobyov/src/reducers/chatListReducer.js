import {handleActions} from 'redux-actions';
import {initChats, addChat} from 'Actions/chatActions'


const initialStore = {};

export default handleActions({
    [initChats]: (store, action) => ({
        1: {title: 'Chat 1'},
        2: {title: 'Chat 2'},
        3: {title: 'Chat 3'},
    }),
    [addChat]: (store, action) => {

        const chatId = Object.keys(store).length + 1;
        return {
            ...store,
            [chatId]: {title:action.payload.title},
        }

    }
}, initialStore);
