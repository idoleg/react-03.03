import { addChat, createChat } from './chatActions';
import { push } from 'connected-react-router';


export default store => (next) => (action) => {
  // if(action.type === createChat.toString()) {
    
  // } else 
  if(action.type === addChat.toString()) {
    store.dispatch(push('/chats/' + action.payload.id))
  }

  next(action);
}