import {loadingChats, failedLoadedChats, initChats, addChat} from './chatActions';
import { createAction } from 'redux-api-middleware';

export const fetchChats = () => createAction({
    endpoint: '/api/chats.json',
    method: 'GET',
    types: [loadingChats.toString(), initChats.toString(), failedLoadedChats()]
});

export const createChat = (name) => (dispatch, getState) => {
    const id = Date.now();
    dispatch(addChat(id, name));
}