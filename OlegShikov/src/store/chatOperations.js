import {loadingChats, failedLoadedChats, initChats, addChat, sendMessage} from './chatActions';
import { v4 as uuid } from 'uuid';
import { createAction } from 'redux-api-middleware';

export const fetchChats = () => createAction({
    endpoint: '/api/chats.json',
    method: 'GET',
    types: [loadingChats.toString(), initChats.toString(), failedLoadedChats()]
});
// export const fetchChats = () => async (dispatch) => {
//     dispatch(loadingChats());
//     try{
//         const res = await fetch('/api/chats.json')
//         if(res.status !== 200){
//             throw new Error("Error with status " + res.status)
//         }
//         const data = await res.json();
//         dispatch(initChats(data));
//     }catch(e) {
//         dispatch(failedLoadedChats(e.message))
//     }
    
// };

export const createChat = (name) => (dispatch, getState) => {
    const id = Date.now();
    const botId = uuid().replace(/-/gi, '').slice(0,16);
    console.log("createChat -> botId", botId)
    dispatch(addChat(id, name, botId));
}

export const sendMessageToBot = (botName, id, content) => async (dispatch, getState) => {
    const userId = getState().chats.chats[id].botId;
    const formData = new FormData;
    formData.append('query', JSON.stringify({
        userid: userId,
        ask: content,
    }));

    const res = await fetch('/bot/', {method: 'POST', body: formData});
    const {aiml} = await res.json();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    dispatch(sendMessage(id, botName, aiml))
    
}