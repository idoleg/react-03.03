import { sendMessage } from "./chatActions";

const BOT_NAME = 'Robot'; 
const timeoutsId = {}; 


export default (store) => (next) => (action)=>{
    next(action); 

    if(action.type == sendMessage.toString()){
        const {id, name} = action.payload
        if(name != BOT_NAME){
            clearTimeout(timeoutsId[id]);
            timeoutsId[id] = setTimeout( generateBotAnswer, 4000, id, name, store); 
        }
    }
}

function generateBotAnswer(id, name, store){
    const chatName = store.getState().chats.state.chats[id].name;
    store.dispatch(sendMessage(id, BOT_NAME, `Hello, ${name}, I'm Robot in chat ${chatName}`));
}