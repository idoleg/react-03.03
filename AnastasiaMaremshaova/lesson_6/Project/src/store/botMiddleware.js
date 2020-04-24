import { sendMessage, addChat } from "./chatActions";
import {sendMessageToBot} from './chatOperations';


const BOT_NAME = 'Robot'; 

export default (store) => (next) => (action) => {
    next(action);

    if(action.type === sendMessage.toString()) {
        const {name, id, content} = action.payload;
        if(name !== BOT_NAME) {
            store.dispatch(sendMessageToBot(BOT_NAME, id, content));
            
        }
    }else if(action.type === addChat.toString()) {
        store.dispatch(sendMessageToBot(BOT_NAME, action.payload.id, "Привет"));
        
    }
}




