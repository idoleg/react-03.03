import { loadingChats, failedLoadedChats, initChats, sendMessage } from './chatActions.js';
import { createAction } from 'redux-api-middleware';

export const fetchChatsOtherWay = () => createAction({
    endpoint: '/api/chats.json',
    method: 'GET',
    types: [loadingChats.toString(), initChats.toString(), failedLoadedChats.toString()],
});

export const fetchChats = () => async (dispatch) => {
    dispatch(loadingChats());
    try {
        const res = await fetch('/api/chats.json');
        if(res.status !== 200){
           throw new Error(`Error with status ${res.status}`) 
        }
        const data = await res.json();
        dispatch(initChats(data));
    } catch(e) {
        dispatch(failedLoadedChats(e.message))
    }
}

export const sendMessageToBot = (id, bot, message) => async (dispatch) => {
    const formData = new FormData;

    formData.append('query', JSON.stringify({
        ask: message,
        userid: 'chatsname' + id,
    }));
    const res = await fetch('/bot/', { method: 'POST', body: formData });
    const {aiml} = await res.json();
    console.log(aiml);
    dispatch(sendMessage(id, bot, aiml))
}

export const createChat = () => (dispatch, getState) => {
    
}