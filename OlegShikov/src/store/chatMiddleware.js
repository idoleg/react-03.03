import {createChat, addChat} from './chatActions';
import {push} from 'connected-react-router';

export default store => next => action => {
    next(action);

    // if(action.type === createChat.toString()){
    //     const id = Date.now();
    //     store.dispatch(addChat(id, action.payload.name));
    // }else 
    if(action.type === addChat.toString()){
        store.dispatch(push('/chats/' + action.payload.id));
    }
    
}