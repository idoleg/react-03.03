import { handleActions } from 'redux-actions';
import { loadingChats, failedLoading, initChats, sendMessage, addChat } from './chatActions';

const initialState = {
    chats: {},
    isLoading: false,
    error: null,
};


export default handleActions({
    [loadingChats]: (store, action) => {
        return {
            ...store,
            isLoading: true,
        }
    },
    [failedLoading]: (store, action) => {
        return {
            ...store,
            isLoading: false,
            error: action.payload.error,
        }
    },
    [initChats]: (store, action) => {
        return {
            ...store,
            isLoading: false,
            chats: action.payload.chats,
        }
    },
    [sendMessage]: (store, action) => {
        console.log("action", action)
            // console.log(store)
        const { id, name, content } = action.payload;

        return {
            ...store,
            chats: {
                ...store.chats,
                [id]: {
                    ...store.chats[id],
                    messages: [
                        ...store.chats[id].messages,
                        { name, content },
                    ]
                }
            }
        };
    },
    [addChat]: (store, action) => {
        console.log("action", action)

        const { id, name } = action.payload;

        return {
            ...store,
            chats: {
                ...store.chats,
                [id]: {
                    name,
                    messages: []
                }
            }
        }
    },
}, initialState)


// const reducer = function(store = { counter: 0 }, action) {
//     console.log(action);

//     return {
//         ...store,
//         counter: store.counter + 1,
//     }
// }