import { push } from 'connected-react-router';
import { createChat, addChat } from './chatActions';


export default store => next => action => {
    next(action);

    if (action.type == addChat.toString()) {
        store.dispatch(push('/chats/' + action.payload.id))
    }
}