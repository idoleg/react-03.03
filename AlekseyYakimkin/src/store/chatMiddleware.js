import {sendMessage, addNewChat, createChat, fire, unfire} from './chatActions'
import {push, LOCATION_CHANGE} from 'connected-react-router'

export default (store) => (next) => (action) => {
    console.log(action.payload)
    if(action.type === addNewChat.toString()){
        store.dispatch(push('/chats/' + action.payload.id))
        //store.dispatch(sendMessage())
    }else if(action.type === sendMessage.toString()){
        const currentChat = +store.getState().router.location.pathname.split('/')[2];
        if(currentChat !== action.payload.id) {
            store.dispatch(fire(action.payload.id));
        }
    }else if(action.type === LOCATION_CHANGE) {
        const currentChat = store.getState().router.location.pathname.split('/')[2];
        store.dispatch(unfire(currentChat));
    }
    // else if(action.type === createChat.toString()){
    //     const id = Date.now()
    //     store.dispatch(addNewChat(id, action.payload.name))
    // }
    next(action)

}