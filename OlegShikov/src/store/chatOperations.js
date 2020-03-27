import {addChat} from './chatActions';


export const createChat = (name) => (dispatch, getState) => {
    const id = Date.now();
    dispatch(addChat(id, name));
}