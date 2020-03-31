import {push} from 'connected-react-router'
import {createNewChat} from './chatActions'

export default store=>next=>action=>{

    console.log(action.payload)
    if(action.type == createNewChat.toString()){
        store.dispatch(push('/chats/' + action.payload.id))
    }
    next(action); 
}