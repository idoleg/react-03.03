import {sendMessage, addNewChat, createChat} from './chatActions'
import {push} from 'connected-react-router'

export default (store) => (next) => (action) => {
    console.log(action.payload)
    if(action.type === addNewChat.toString()){
        store.dispatch(push('/chats/' + action.payload.id))
        //store.dispatch(sendMessage())
    }
    // else if(action.type === createChat.toString()){
    //     const id = Date.now()
    //     store.dispatch(addNewChat(id, action.payload.name))
    // }
    next(action)

}