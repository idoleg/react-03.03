  
import {addChat} from './chatActions';


export const createChat = (name) => (dispatch, getState) => {
    console.log(getState); 
    //const botId = id;
    dispatch(addChat(id, name));
}


