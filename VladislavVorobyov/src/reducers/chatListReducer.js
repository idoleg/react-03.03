import {handleActions, combineActions} from 'redux-actions';
import {
    loadingChats,
    failedLoadedChats,
    initChats,
    addChat,
    removeChat,
    startFire,
    finishFire
} from 'Actions/chatActions'


const initialStore = {
    loading: false,
    data: [],
    hasError: false,
    errorMessage: '',
};

export default handleActions({
    [loadingChats]: (store, action) => ({
        ...store,
        loading: true,
        hasError: false,
        errorMessage: '',
    }),
    [failedLoadedChats]: (store, action) => ({
        ...store,
        loading: false,
        hasError: true,
        errorMessage: action.payload.error,
    }),
    [initChats]: (store, action) => {
        const {chats} = action.payload;
        return {
            ...store,
            loading: false,
            hasError: false,
            errorMessage: '',
            data: chats.map(chat => ({...chat, fire: false}))
        }
    },
    [addChat]: (store, action) => {
        const chatsIds = Object.keys(store.data);
        const chatId = parseInt(chatsIds[chatsIds.length-1])+1;
        return {
            ...store,
            data: [
                ...store.data,
                {id: chatId.toString(), title: action.payload.title, fire: false}
            ],
        }
    },
    [removeChat]: (store, action) => {
        const {chatId} = action.payload;
        return {
            ...store,
            data: store.data.filter(chat => chat.id !== chatId)
        };
    },
    [combineActions(startFire, finishFire)]: (store, action) => {
        const {chatId} = action.payload;
        const chat = store.data.find(chat => chat.id === chatId);
        return {
            ...store,
            data:[
                {...chat, fire: action.type === startFire.toString()},
                ...store.data.filter(chat => chat.id !== chatId),
            ],
        }
    },
}, initialStore);
