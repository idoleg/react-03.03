import {sendMessage, addChat} from './chatActions';
import {sendMessageToBot} from './chatOperation';



const BOT_NAME = "RoboFriend";
const timeoutsId = {};
export default (store) => (next) => (action) => {
    next(action);

    if(action.type === sendMessage.toString()) {
        const {name, id, text} = action.payload;
        if(name !== BOT_NAME) {
            store.dispatch(sendMessageToBot(BOT_NAME, id, text));
        }
    }else if(action.type === addChat.toString()) {
        store.dispatch(sendMessageToBot(BOT_NAME, action.payload.id, "Привет"));
    }

    
}

function generateBotAnswer(store, id, name) {
    const chatName = store.getState().chats.chats[id].name;
    store.dispatch(sendMessage(id, BOT_NAME, `Hello, ${name}, I'm robot in chat ${chatName}`))
}

function generateBotAnswerForNewChat(store, id) {
    const chatName = store.getState().chats.chats[id].name;
    store.dispatch(sendMessage(id, BOT_NAME, `Welcome to new chat chat ${chatName}`))
}