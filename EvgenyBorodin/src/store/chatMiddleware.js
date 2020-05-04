import { push, LOCATION_CHANGE } from 'connected-react-router';

import { addChat, sendMessage, selectChat, deselectChat, fireChat, unfireChat } from './chatActions';

export default store => next => action => {
    next(action);

    if(action.type === addChat.toString()){
        const id = Object.keys(store.getState().app.chats).length;
        store.dispatch(push('/chats/' + id));
    } else if (action.type === sendMessage.toString()){
        const currentChatId = store.getState().router.location.pathname.split('/')[2]
        if (currentChatId !== action.payload.id) {
            store.dispatch(fireChat(action.payload.id))
        }
    } else if (action.type === LOCATION_CHANGE) {
        const currentChatId = store.getState().router.location.pathname.split('/')[2]
        if (currentChatId) {
            store.dispatch(selectChat(currentChatId))
            store.dispatch(unfireChat(currentChatId))
        } else {
            store.dispatch(deselectChat())
        }
    }
    
}
