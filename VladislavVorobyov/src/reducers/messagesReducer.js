import {handleActions} from 'redux-actions';
import {loadingMessages, failedLoadedMessages, initMessages, sendMessage} from "Actions/messageActions";


const initialStore = {
    loading: false,
    data:[],
    errorMessage: '',
};

export default handleActions({
    [loadingMessages]: (store, action) => ({
        ...store,
        loading: true,
    }),
    [failedLoadedMessages]: (store, action) => ({
        ...store,
        loading: false,
        errorMessage: action.payload.message,
    }),
    [initMessages]: (store, action) => ({
        ...store,
        loading: false,
        data:action.payload,
    }),
    [sendMessage]: (store, action) => {
        const messageId = Object.keys(store).length + 1;
        const {chatId, senderId, content} = action.payload;
        return {
            ...store,
            data: [
                ...store.data,
                {...action.payload, id: messageId},
            ],
        }
    },
}, initialStore);