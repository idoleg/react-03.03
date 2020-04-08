import {addChat} from './chatActions'
import {push} from 'connected-react-router'


export default store => next => action=>{
    console.log(action)
    next(action); 
    console.log(action.type)

    if(action.type == addChat.toString()){
        store.dispatch(push('/chats/' + action.payload.id))
    }
}
