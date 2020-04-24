import {
    sendMessage,
    addChat,
    fire,
    unfire,
    setFill,
    deleteFill,
    savePrevId,
    deleteChat
} from './chatActions';
import {push, LOCATION_CHANGE} from 'connected-react-router';

export default store => next => action => {
    next(action);

    if (action.type === addChat.toString()) {
        store.dispatch(push('/chats/' + action.payload.id));
        store.dispatch(setFill(action.payload.id));
    } else if (action.type === sendMessage.toString()) {
        const currentChat = store
            .getState()
            .router
            .location
            .pathname
            .split('/')[2];

        if (currentChat !== action.payload.id) {
            store.dispatch(fire(action.payload.id));
        }
    } else if (action.type === LOCATION_CHANGE) {


        const currentChat = store
            .getState()
            .router
            .location
            .pathname
            .split('/')[2];


            if( store
                .getState()
                .router
                .location
                .pathname === '/chatlist/') { store.dispatch(deleteFill(store.getState().chats.prevId)); }


        if ((currentChat !== '') && (currentChat !== undefined)) {
            store.dispatch(unfire(currentChat));

        }
        else if (currentChat === undefined){
            store.dispatch(deleteFill(store.getState().chats.prevId))
        }
    } 
    
    else if (action.type === setFill.toString()) {
        
        if (store.getState().chats.prevId !== null && store.getState().chats.prevId !== action.payload.id) {
            store.dispatch(deleteFill(store.getState().chats.prevId));
        }
        store.dispatch(savePrevId(action.payload.id));

    } else if (action.type === deleteChat.toString()) { 
            const id = action.payload.id; 
            console.log(id); 
            store.dispatch(push('/chats/'));
            if (id === store.getState().chats.prevId){
                store.dispatch(savePrevId(null));
            }

    }
}