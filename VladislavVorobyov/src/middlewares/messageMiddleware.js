import {sendMessage} from 'Actions/messageActions';
import {startFire, finishFire} from "Actions/chatActions";


const USER_ID = 1,
    BOT_ID = 2,
    timeouts = {};



export default store => next => (action) => {

    switch (action.type) {
        case sendMessage.toString(): {
            validateSendMessageAction(store, action);
            generateBotAnswer(store, action);
            fireChat(store, action);
        }

    }
    next(action)
}

function validateSendMessageAction(store, action) {
    const storeData = store.getState();
    const {chatId, senderId} = action.payload;
    const chatsKeys = Object.keys(storeData.chats);
    const usersKeys = Object.keys(storeData.users);
    if (!chatsKeys.includes(chatId.toString())){
        throw `Chat with id ${chatId} does not exist!`
    }
    if (!usersKeys.includes(senderId.toString())) {
        throw `User with id ${senderId} does not exist!`
    }
}


function generateBotAnswer(store, action) {
    const {senderId, chatId} = action.payload;
    const storeData = store.getState()
    const userName = storeData.users[senderId].name;
    const chatName = storeData.chats[chatId].title;
    if (senderId === USER_ID) {
        clearTimeout(timeouts[chatId]);
        timeouts[chatId] = setTimeout(()=> store.dispatch(
            sendMessage(chatId, BOT_ID, `Hello ${userName}, I'm bot chat ${chatName}`)
        ), 1000)
    }
}

function  fireChat(store, action) {
    const {senderId, chatId} = action.payload;
    const path = store.getState().router.location.pathname.split('/');
    const currentChatId = parseInt(path[path.length-1]);
     if (senderId !== USER_ID && chatId !== currentChatId) {
        store.dispatch(startFire(chatId));
        setTimeout(()=> store.dispatch(finishFire(chatId)), 1500);
    }
}
