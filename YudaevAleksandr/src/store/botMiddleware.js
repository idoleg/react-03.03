import {sendMessage, addChat} from "./chatActions";

const BOT_NAME = "RobotAlex";
const timeoutsId = {};

export default (store) => (next) => (action) => {
    next(action);

    if (action.type === sendMessage.toString()) {
        const {name, id} = action.payload;
        if(name !== BOT_NAME) {
            clearTimeout(timeoutsId[id]);
            timeoutsId[id] = setTimeout(generateBotAnswer, 2000, store, id, name);
        }
    }else if(action.type === addChat.toString()){
        generateBotAnswerForNewChat(store, action.payload.id);
    }

};

const generateBotAnswer = (store, id, name) => {
    const chatName = store.getState().chats[id].name;
    store.dispatch(sendMessage(id, BOT_NAME, `robot answer in ${chatName}`));
};

const generateBotAnswerForNewChat = (store, id, name) => {
    const chatName = store.getState().chats[id].name;
    store.dispatch(sendMessage(id, BOT_NAME, `Welcome to chat ${chatName}`));
};